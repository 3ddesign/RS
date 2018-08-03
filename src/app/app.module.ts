import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { DOMAIN } from '../config';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './_shared/components/menu/menu.component';
import { HeaderComponent } from './main/sections/header/header.component';
import { ServicesComponent } from './main/sections/services/services.component';
import { AboutComponent } from './main/sections/about/about.component';
import { TechnologiesComponent } from './main/sections/technologies/technologies.component';
import { CareerComponent } from './main/sections/career/career.component';
import { BlogComponent } from './main/sections/blog/blog.component';
import { ContactComponent } from './main/sections/contact/contact.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FormModalComponent } from './_shared/components/modals/form-modal/form-modal.component';
import { MatDialog } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    HeaderComponent,
    ServicesComponent,
    AboutComponent,
    TechnologiesComponent,
    CareerComponent,
    BlogComponent,
    ContactComponent,
    FormModalComponent,
  ],
  imports: [
    ScrollToModule.forRoot(),
    routing,
    BrowserModule.withServerTransition({appId: 'right-stack'}),
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    FormModalComponent
  ],
  providers: [MatDialog,
    {
      provide: 'DOMAIN',
      useValue: DOMAIN
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

