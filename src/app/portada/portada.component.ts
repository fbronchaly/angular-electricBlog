import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';


import {ArticuloModel} from '../modelos/articulo-model';




@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

 datosArticulos: ArticuloModel;

  constructor(private fs: FirebaseService) { 

  }

  ngOnInit() {

    this.fs.leeArticulos().subscribe(data => {
 
      this.datosArticulos = data.map(e => {
        return {
          id: e.payload.doc.id,
         
        };
      })
     
 
    });
    
  }

}