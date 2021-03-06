import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/firestore';



import {ArticuloModel} from '../modelos/articulo-model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';





@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {


datosArticulos:ArticuloModel[]=[];
imagen; 
storageRef;
pathReference;
url;
val;
display;
articulo;
index;
articuloSeleccionado: EventEmitter<number>;

titular: String;

  constructor(
    private fs: FirebaseService,
   private storage: AngularFireStorage,
   private router: Router
 ) {this.articuloSeleccionado = new EventEmitter();}

  ngOnInit() {

    this.fs.leeArticulos().subscribe(data => {
 
      this.datosArticulos = data.map(e => {
        const data = e.payload.doc.data() as ArticuloModel
      return {
        id: e.payload.doc.id,
        fecha:e.payload.doc.data()['fecha'],
        titular:e.payload.doc.data()['titular'],
        autor: e.payload.doc.data()['autor'],
        tituloArticulo1:e.payload.doc.data()['tituloArticulo1'],
        tituloArticulo2:e.payload.doc.data()['tituloArticulo2'],
        tituloArticulo3:e.payload.doc.data()['tituloArticulo3'],
        tituloArticulo4:e.payload.doc.data()['tituloArticulo4'],
        textoArticulo1:e.payload.doc.data()['textoArticulo1'],
        textoArticulo2:e.payload.doc.data()['textoArticulo2'],
        textoArticulo3:e.payload.doc.data()['textoArticulo3'],
        textoArticulo4:e.payload.doc.data()['textoArticulo4'],
        imagen: e.payload.doc.data()['imagen'],
       
        };
        
        
       
      })
      console.log (this.datosArticulos[0].fecha);
      //console.log (this.datosArticulos.length);
      console.log (this.datosArticulos[0]);



      for( let i=0; this.datosArticulos.length>i; i++ ){
      console.log('Despues del for' + this.datosArticulos[i].imagen);
    
      this.url = this.storage.ref('/fotosArticulos/'+ this.datosArticulos[0].imagen).getDownloadURL()
      .subscribe(
       val => {
         console.log('Valor' + val);
         
          this.datosArticulos[i].imagen = val;
          //setTimeout(()=>{ this.display = "" },1000)
         // this.pathReference = val;
          
     });
  }    
    }
    );

  
    
  }

  verArticulo(i){
    let articuloElegido = this.datosArticulos[i];
    console.log("articuloElegido" + articuloElegido);
   
     
    this.router.navigate(['/articulo-tarjeta', articuloElegido]);
  };
  
 
  }
