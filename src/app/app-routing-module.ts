import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Oferta } from './components/oferta/oferta';
import { Home } from './components/home/home';
import { Gratuita } from './components/gratuita/gratuita';


const routes: Routes = [
  { path: '', component: Home },
  { path: 'oferta', component: Oferta},
  { path: 'gratuita', component: Gratuita }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
