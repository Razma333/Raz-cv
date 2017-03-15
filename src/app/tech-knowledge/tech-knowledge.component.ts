import {Component} from '@angular/core';

@Component({
    selector: 'tech-knowledge',
    templateUrl: '../app/tech-knowledge/tech-knowledge.component.html',
    styleUrls: ['../app/tech-knowledge/tech-knowledge.less', '../app/tech-knowledge/logos-animations.less']
})

export class TechKnowledgeComponent{

   programmingLanguages: Object[] = [
       {lang: 'C#', logoUrl: '/images/c-sharp-logo.png'},
       {lang: 'JavaScript', logoUrl: '/images/javascript_logo.png'},
       {lang: 'TypeScript', logoUrl: '/images/typescript-logo.png'},
       {lang: 'HTML 5', logoUrl: '/images/HTML5_logo.png'},
       {lang: 'CSS + Less', logoUrl: '/images/CSS-logo.png'},
       {lang: 'SQL', logoUrl: '/images/sql-logo.png'}
   ];
   techAndCourses: Object[] = [
          {tech: 'Angular1, 2', logoUrl: '/images/angular-logo.png'},
          {tech: 'Grunt', logoUrl: '/images/grunt-logo.png'},
          {tech: 'JQuery', logoUrl: '/images/jquery-logo.png'},
          {tech: 'ASP.NET MVC & Web API', logoUrl: '/images/asp.net-logo.png'},
          {tech: 'Entity Framework 6', logoUrl: '/images/entity-framework-logo.jpg'},
          {tech: 'Data Structures Using C#', logoUrl: '/images/data-structures-icon.png'},
          {tech: 'Design Patterns & Techniques in .NET', logoUrl: '/images/design-patterns-pic.png'},
          {tech: 'Windows Azure and Web Services', logoUrl: '/images/azure-logo.png'},
          {tech: 'Windows 10 Apps, WPF', logoUrl: '/images/windows-logo.png'},
          {tech: 'WCF', logoUrl: '/images/wcf-logo.png'},
   ];
}