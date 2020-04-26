import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/firestore';



import {ArticuloModel} from '../modelos/articulo-model';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

 datosArticulos:ArticuloModel[]=[];
 imagen;
 //pathReference: Observable<string | null>;
 storageRef;
pathReference;
url;
val;
display;

  constructor(
    private fs: FirebaseService,
   private storage: AngularFireStorage,

  
   ) { 

  }

  ngOnInit() {

    this.fs.leeArticulos().subscribe(data => {
 
      this.datosArticulos = data.map(e => {

        const data = e.payload.doc.data() as ArticuloModel
      return {
        id: e.payload.doc.id,
        fecha :e.payload.doc.data()['fecha'],
        titular: e.payload.doc.data()['titular'],
        autor: e.payload.doc.data()['autor'],
        textoArticulo:e.payload.doc.data()['textoArticulo'],
        imagen: e.payload.doc.data()['imagen'],
       
        };
         console.log (this.datosArticulos.length);
         console.log (this.datosArticulos[0]);
       
      })
     
// Adquisición de fotografias según articulo
  for( let i=0; this.datosArticulos.length>i; i++ ){

   this.url = this.storage.ref('/fotosArticulos/'+ this.datosArticulos[i].imagen).getDownloadURL()
   .subscribe(
     val => {
         console.log(val);
         
          this.datosArticulos[i].imagen = val;
          //setTimeout(()=>{ this.display = "" },1000)
          this.pathReference = val;
          
     });
  }  
     
    });

    
    
  }


  

  }
