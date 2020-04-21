import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from './environments/environment';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './formulario/formulario.component';
import { ValidatorService } from './validator.service';
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FirebaseService } from './firebase.service';
import { PortadaComponent } from './portada/portada.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
  BrowserModule,
  FormsModule,
  NgbModule,
  AngularFirestoreModule,
  ReactiveFormsModule,  
  AngularFireModule.initializeApp(environment.firebase),
  HttpClientModule
 	],
  declarations: [ AppComponent, HelloComponent, FormularioComponent, HomeComponent, CabeceraComponent, PortadaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ValidatorService, FirebaseService]
})
export class AppModule { }
