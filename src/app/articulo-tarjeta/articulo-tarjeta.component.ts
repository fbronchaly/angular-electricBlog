import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ArticuloModel} from '../modelos/articulo-model';

@Component({
  selector: 'app-articulo-tarjeta',
  templateUrl: './articulo-tarjeta.component.html',
  styleUrls: ['./articulo-tarjeta.component.css']
})
export class ArticuloTarjetaComponent implements OnInit {

  

parametros:ArticuloModel[] = [];

  constructor(private route: ActivatedRoute) {
   route.params.subscribe(params => {
     this.parametros = params;
     console.log (this.parametros);
       return this.parametros;
    
    });
  }

  ngOnInit() {
  }

}