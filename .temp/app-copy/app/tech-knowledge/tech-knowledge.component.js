"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TechKnowledgeComponent = (function () {
    function TechKnowledgeComponent() {
        this.programmingLanguages = [
            { lang: 'C#', logoUrl: '/images/c-sharp-logo.png' },
            { lang: 'JavaScript', logoUrl: '/images/javascript_logo.png' },
            { lang: 'TypeScript', logoUrl: '/images/typescript-logo.png' },
            { lang: 'HTML 5', logoUrl: '/images/HTML5_logo.png' },
            { lang: 'CSS + Less', logoUrl: '/images/CSS-logo.png' },
            { lang: 'SQL', logoUrl: '/images/sql-logo.png' }
        ];
        this.techAndCourses = [
            { tech: 'Angular1, 2', logoUrl: '/images/angular-logo.png' },
            { tech: 'Grunt', logoUrl: '/images/grunt-logo.png' },
            { tech: 'JQuery', logoUrl: '/images/jquery-logo.png' },
            { tech: 'ASP.NET MVC & Web API', logoUrl: '/images/asp.net-logo.png' },
            { tech: 'Entity Framework 6', logoUrl: '/images/entity-framework-logo.jpg' },
            { tech: 'Data Structures Using C#', logoUrl: '/images/data-structures-icon.png' },
            { tech: 'Design Patterns & Techniques in .NET', logoUrl: '/images/design-patterns-pic.png' },
            { tech: 'Windows Azure and Web Services', logoUrl: '/images/azure-logo.png' },
            { tech: 'Windows 10 Apps, WPF', logoUrl: '/images/windows-logo.png' },
            { tech: 'WCF', logoUrl: '/images/wcf-logo.png' },
        ];
    }
    TechKnowledgeComponent = __decorate([
        core_1.Component({
            selector: 'tech-knowledge',
            templateUrl: '../app/tech-knowledge/tech-knowledge.component.html',
            styleUrls: ['../app/tech-knowledge/tech-knowledge.less']
        }), 
        __metadata('design:paramtypes', [])
    ], TechKnowledgeComponent);
    return TechKnowledgeComponent;
}());
exports.TechKnowledgeComponent = TechKnowledgeComponent;
//# sourceMappingURL=tech-knowledge.component.js.map