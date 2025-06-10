import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Oferta } from './components/oferta/oferta';
import { Home } from './components/home/home';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'oferta', component: Oferta}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
