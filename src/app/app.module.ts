import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './formulario/formulario.component';
import { ValidatorService } from './validator.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,NgbModule ],
  declarations: [ AppComponent, HelloComponent, FormularioComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ValidatorService]
})
export class AppModule { }
