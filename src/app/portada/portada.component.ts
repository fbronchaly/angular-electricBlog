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
       
      })
     
    //this.pathReference = this.storage.ref('/fotosArticulos/img942766');

   // var gsRef = this.storage.refFromURL('gs://bucket/images/muimui.jpg');
   /*    
   const ref = this.storage.ref('fotosArticulos/img942766');
   this.pathReference = ref.getDownloadURL();
   //this.pathReference = this.storage.storage.refFromURL('gs://bucket/fotosArticulos/img103080.png');
    console.log (this.pathReference)

   */
   this.url = this.storage.ref(`/fotosArticulos/img103080`).getDownloadURL()
   .subscribe(
     val => {
         console.log(val);
         this.pathReference = val;

     });
     
     
    });

    
    
  }


  

  }
