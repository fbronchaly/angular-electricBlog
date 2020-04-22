import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PortadaComponent } from './portada/portada.component';

const APP_ROUTES: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'portada', component: PortadaComponent },

 { path: '**', pathMatch: 'full', redirectTo: 'investigadoras' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);