import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routing} from './app.routing';
import {DOMAIN} from '../config';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {MenuComponent} from './_shared/components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent
  ],
  imports: [
    routing,
    BrowserModule
  ],
  providers: [
    {
      provide: 'DOMAIN',
      useValue: DOMAIN
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

