import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import {ArticuloModel} from './modelos/articulo-model';

import { Observable } from 'rxjs';


@Injectable()
export class FirebaseService {

private articuloCollection: AngularFirestoreCollection<ArticuloModel>;
shirts: Observable<ArticuloModel[]>;


constructor( private firestore: AngularFirestore  ) { 
this.articuloCollection = firestore.collection<ArticuloModel>('shirts');
this.shirts = this.articuloCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ArticuloModel;
        const id = a.payload.doc.id;
        return { id, ...data };
        console.log (data);
      })))

};

datosArticulo;


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