import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseService {


constructor( private firestore: AngularFirestore  ) { }


  createUser(value){
  return this.firestore.collection('articulos').add({

    id: value.id,
  titular: value.titular,
  autor: value.autor,
  textoArticulo: value.textoArticulo,
  imagen: value.imagen
})
  };
  
}