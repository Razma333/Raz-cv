import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WindowRef } from './shared/Window';

import { AppComponent } from './app.component';
import { CvNavbarComponent } from './cv-navbar/cv-navbar.component';
import { TechKnowledgeComponent } from './tech-knowledge/tech-knowledge.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    CvNavbarComponent,
    TechKnowledgeComponent,
    ExperienceComponent
  ],
  bootstrap: [AppComponent],
  providers: [WindowRef]
})
export class AppModule { }
