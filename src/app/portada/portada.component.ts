import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';

import {ArticuloModel} from '../modelos/articulo-model';




@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

 private articuloCollection: AngularFirestoreCollection<ArticuloModel>;
shirts: Observable<ArticuloModel[]>;

  constructor(private firestore: AngularFirestore) { 

    this.articuloCollection = firestore.collection<ArticuloModel>('shirts');
this.shirts = this.articuloCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ArticuloModel;
        const id = a.payload.doc.id;
        return { id, ...data };
        console.log (...data);
      })))
   }

  ngOnInit() {
    
  }

}