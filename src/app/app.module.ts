import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CvNavbarComponent }  from '../app/cv-navbar/cv-navbar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    CvNavbarComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
