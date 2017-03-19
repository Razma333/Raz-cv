import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvNavbarComponent } from '../app/cv-navbar/cv-navbar.component';
import { TechKnowledgeComponent } from '../app/tech-knowledge/tech-knowledge.component';
import { ExperienceComponent } from '../app/experience/experience.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    CvNavbarComponent,
    TechKnowledgeComponent,
    ExperienceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
