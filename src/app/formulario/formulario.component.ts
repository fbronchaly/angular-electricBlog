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


    private datos: FormGroup;
    //private datos: ArticuloModel;  // Modelo
   


  constructor(private validator: ValidatorService,
   private fb:FormBuilder,
   private formGroup:FormGroup) {
      
    }

  ngOnInit() {

    this.datos = this.fb.group({
      titular  : ['', [ Validators.required]  ],
      autor: ['', [Validators.required ]],
      texto  : ['', [ Validators.required] ],
      imagen : [''],

      })
  }


 

    
  

  onSubmit(instance){
 console.log(instance); // just to check if it worked 
}

}