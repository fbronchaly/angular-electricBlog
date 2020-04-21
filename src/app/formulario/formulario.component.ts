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


    formulario: FormGroup;
    datos:ArticuloModel;
   


  constructor(private validator: ValidatorService,
   private fb:FormBuilder) { }

  ngOnInit() {
  }

  guardar(){};

}