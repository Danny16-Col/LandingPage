import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeroSelection } from './components/hero-selection/hero-selection';
import { Navbar } from './components/navbar/navbar';
import { BodyD } from './components/body-d/body-d';
import { BodyC } from './components/body-c/body-c';
import { Ayuda } from './components/ayuda/ayuda';
import { Footer } from './components/footer/footer';
import { Oferta } from './pages/oferta/oferta';
import { Home } from './pages/home/home';
import { Gratuita } from './pages/gratuita/gratuita';
import { FooterAlt } from './components/footer-alt/footer-alt';
import { Pages } from './pages/pages';

@NgModule({
  declarations: [
    App,
    HeroSelection,
    Navbar,
    BodyD,
    BodyC,
    Ayuda,
    Footer,
    Oferta,
    Home,
    Gratuita,
    FooterAlt,
    Pages
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
