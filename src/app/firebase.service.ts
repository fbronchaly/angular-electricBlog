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
avatarLink: string = "https://cdn.jsdelivr.net/gh/fbronchaly/angular-electricBlog@master/src/assets/img/batman.png";



  createUser(value,avatarLink){
  return this.firestore.collection('articulos').add({
  fecha: value.fecha,
  titular: value.titular,
  autor: value.autor,
  textoArticulo: value.textoArticulo,
  imagen: avatarLink
})
  };

  
leeArticulos() {
    return this.firestore.collection('articulos').snapshotChanges();
  }






}