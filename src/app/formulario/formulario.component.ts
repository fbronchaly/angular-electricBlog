// Modulos
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Servicios
import {FirebaseService} from '../firebase.service';
import { ValidatorService } from '../validator.service';

//Modelo
import {ArticuloModel} from '../modelos/articulo-model';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


   formulario;

  private datos: ArticuloModel;  // Modelo
     
 dateId = new Date();
 file: File;


   


  constructor(
  private validator: ValidatorService,
  private fb:FormBuilder,
  private firebaseService: FirebaseService,
  private storage: AngularFireStorage
) {
      this.crearFormulario();
    }

  ngOnInit() {
 }


  crearFormulario() {


      this.formulario = this.fb.group({
      fecha: this.dateId,
      titular: ['', [ Validators.required]],
      autor: ['', [Validators.required ]],
      textoArticulo: ['', [ Validators.required] ],
      imagen: File [''],

      })

  }

public procesarFile(e) {
    console.log (e)
    //this.image = imageInput;
    /*const id = Math.random().toString(36).substring(2);
    
    const filePath = 'imagenes/imagen.png';
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath,file);*/
    const file = e.target.files[0];
    return this.storage.upload('fotos', file);
    console.log ('fotografia enviada');
  }

 


  onSubmit(instance){
 console.log(instance); // just to check if it worked 
 //instance.imagen = this.file;

 this.firebaseService.createUser(instance)
	.then(
	  res => {
	   console.log ('Datos envidados');
	  }).catch(err => console.log ('err', err.message))
}

}