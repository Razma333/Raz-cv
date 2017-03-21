import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WindowRef } from './shared/Window';

import { AppComponent } from './app.component';
import { CvNavbarComponent } from './cv-navbar/cv-navbar.component';
import { TechKnowledgeComponent } from './tech-knowledge/tech-knowledge.component';
import { ExperienceComponent } from './experience/experience.component';
import { BombComponent } from './bomb/bomb.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    CvNavbarComponent,
    TechKnowledgeComponent,
    ExperienceComponent,
    BombComponent
  ],
  bootstrap: [AppComponent],
  providers: [WindowRef]
})
export class AppModule { }
