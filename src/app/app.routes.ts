import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PortadaComponent } from './portada/portada.component';
import { ArticuloTarjetaComponent } from './articulo-tarjeta/articulo-tarjeta.component';

const APP_ROUTES: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'portada', component: PortadaComponent },
  { path: 'articulo-tarjeta', component: ArticuloTarjetaComponent },

 { path: '**', pathMatch: 'full', redirectTo: 'portada' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);