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


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


   formulario;
    //private datos: ArticuloModel;  // Modelo
 dataId = new Date();
 id3 = this.dataId.getTime();
 numeroOrden = 3;
   


  constructor(
  private validator: ValidatorService,
  private fb:FormBuilder,
  private firebaseService: FirebaseService
) {
      this.crearFormulario();
    }

  ngOnInit() {
 }


  crearFormulario() {


      this.formulario = this.fb.group({
      numeroOrden: [this.numeroOrden],
      titular: ['', [ Validators.required]],
      autor: ['', [Validators.required ]],
      textoArticulo: ['', [ Validators.required] ],
      imagen: [''],

      })

  }



 


 

    
  

  onSubmit(instance){
 console.log(instance); // just to check if it worked 

 this.firebaseService.createUser(instance)
	.then(
	  res => {
	   console.log ('Datos envidados');
	   
	  }
	)
}

}