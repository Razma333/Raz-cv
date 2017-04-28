import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WindowRef } from './shared/Window';

import { AppComponent } from './app.component';
import { CvNavbarComponent } from './cv-navbar/cv-navbar.component';
import { TechKnowledgeComponent } from './tech-knowledge/tech-knowledge.component';
import { ExperienceComponent } from './experience/experience.component';
import { BombComponent } from './effects/bomb/bomb.component';
import { LogosSpinnerComponent } from './effects/logos-spinner/logos-spinner.component';
import { ArrowFloatingComponent } from './effects/arrow-floating/arrow-floating.component';
import { ArrowFloatingDirective } from './effects/arrow-floating/directive/arrow-floating.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    CvNavbarComponent,
    TechKnowledgeComponent,
    ExperienceComponent,
    BombComponent,
    LogosSpinnerComponent,
    ArrowFloatingComponent,
    ArrowFloatingDirective
  ],
  bootstrap: [AppComponent],
  providers: [WindowRef]
})
export class AppModule { }
