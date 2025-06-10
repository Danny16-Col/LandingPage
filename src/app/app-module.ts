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

@NgModule({
  declarations: [
    App,
    HeroSelection,
    Navbar,
    BodyD,
    BodyC,
    Ayuda,
    Footer
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
