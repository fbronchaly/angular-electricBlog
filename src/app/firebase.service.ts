import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import {ArticuloModel} from './modelos/articulo-model';

import { Observable } from 'rxjs';


@Injectable()
export class FirebaseService {




constructor( private firestore: AngularFirestore  ) {}

datosArticulo;
numeroOrden = 3;


  createUser(value){
  return this.firestore.collection('articulos').add({

  numeroOrden: value.this.numeroOrden,
  titular: value.titular,
  autor: value.autor,
  textoArticulo: value.textoArticulo,
  imagen: value.imagen
})
  };

  
leeArticulos() {
    return this.firestore.collection('articulos').snapshotChanges();
  }






}