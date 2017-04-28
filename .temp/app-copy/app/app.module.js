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
var platform_browser_1 = require('@angular/platform-browser');
var Window_1 = require('./shared/Window');
var app_component_1 = require('./app.component');
var cv_navbar_component_1 = require('./cv-navbar/cv-navbar.component');
var tech_knowledge_component_1 = require('./tech-knowledge/tech-knowledge.component');
var experience_component_1 = require('./experience/experience.component');
var bomb_component_1 = require('./effects/bomb/bomb.component');
var logos_spinner_component_1 = require('./effects/logos-spinner/logos-spinner.component');
var arrow_floating_component_1 = require('./effects/arrow-floating/arrow-floating.component');
var arrow_floating_directive_1 = require('./effects/arrow-floating/directive/arrow-floating.directive');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [
                app_component_1.AppComponent,
                cv_navbar_component_1.CvNavbarComponent,
                tech_knowledge_component_1.TechKnowledgeComponent,
                experience_component_1.ExperienceComponent,
                bomb_component_1.BombComponent,
                logos_spinner_component_1.LogosSpinnerComponent,
                arrow_floating_component_1.ArrowFloatingComponent,
                arrow_floating_directive_1.ArrowFloatingDirective
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [Window_1.WindowRef]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map