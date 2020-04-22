import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from './environments/environment';
import { APP_ROUTING } from './app.routes';
import { RouterModule } from '@angular/router';


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
import { ArticuloTarjetaComponent } from './articulo-tarjeta/articulo-tarjeta.component';
import {NavbarComponent} from './shared/navbar/navbar.component';


@NgModule({
  imports:      [ 
  BrowserModule,
  FormsModule,
  NgbModule,
  AngularFirestoreModule,
  ReactiveFormsModule,  
  AngularFireModule.initializeApp(environment.firebase),
  HttpClientModule,
  APP_ROUTING,
  RouterModule


 	],
  declarations: [ AppComponent, HelloComponent, FormularioComponent, HomeComponent, CabeceraComponent, PortadaComponent, ArticuloTarjetaComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ValidatorService, FirebaseService]
})
export class AppModule { }
