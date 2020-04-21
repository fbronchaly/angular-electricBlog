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

 

  constructor(private firestore: AngularFirestore) { 

  }

  ngOnInit() {
    
  }

}