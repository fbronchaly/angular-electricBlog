import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';


import {ArticuloModel} from '../modelos/articulo-model';




@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

 datosArticulos: any;

  constructor(private fs: FirebaseService) { 

  }

  ngOnInit() {

    this.fs.leeArticulos().subscribe(data => {
 
      this.datosArticulos = data.map(e => {
        const data = e.payload.doc.data() as ArticuloModel
        return {
          id: e.payload.doc.id,
        titular: e.payload.doc.data()['titular'],
        autor: e.payload.doc.data()['autor'],
        textoArticulo:e.payload.doc.data()['textoArticulo'],
        imagen: e.payload.doc.data()['imagen'],

         
        };
      })
     console.log(this.datosArticulos);
 
    });
    
  }

}