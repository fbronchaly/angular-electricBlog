import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidatorService } from '../validator.service';
import {ArticuloModel} from '../modelos/articulo-model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


   formulario: any;
    //private datos: ArticuloModel;  // Modelo
   


  constructor(private validator: ValidatorService,
   private fb:FormBuilder
) {
      this.crearFormulario();
    }

  ngOnInit() {
 }


  crearFormulario() {
      this.formulario = this.fb.group({
      titular: ['', [ Validators.required]],
      autor: ['', [Validators.required ]],
      textoArticulo: ['', [ Validators.required] ],
      imagen: [''],

      })

  }



 


 

    
  

  onSubmit(instance){
 console.log(instance); // just to check if it worked 
}

}