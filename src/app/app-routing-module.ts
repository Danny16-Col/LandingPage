import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Gratuita } from './pages/gratuita/gratuita';
import { Oferta } from './pages/oferta/oferta';


const routes: Routes = [
  { path: '', component: Home },
  { path: 'oferta', component: Oferta},
  { path: 'gratuita', component: Gratuita },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
