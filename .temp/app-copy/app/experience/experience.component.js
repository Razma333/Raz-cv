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
var ExperienceComponent = (function () {
    function ExperienceComponent() {
        this.works = [
            { year: '2017', company: 'MyPensya', description: 'I worked as a Frontend developer in a startup that deals with Pensions & Insurances.', techs: ['AngularJS - JavaScript', 'CSS - Less', 'HTML5', 'Grunt'] },
            { year: '2015-2016', company: 'XForex', description: 'Selling Trading Accounts for Stocks, Foreign Exchange and Commodities, to people from all over the world.', techs: null },
            { year: '2014-2015', company: 'Cosmetics Kiosks', description: 'I Worked for 8 months in selling cosmetics products using English & French languages.', techs: null },
            { year: '2013-2014', company: 'Original\'s', description: 'Started as a Shift Manager Then as a Store Manager.', techs: null },
            { year: '2011-2013', company: 'SantaFe', description: 'A Waiter and Bartender at SantaFe restaurant.', techs: null },
        ];
    }
    ExperienceComponent = __decorate([
        core_1.Component({
            selector: 'experience',
            templateUrl: '../app/experience/experience.component.html',
            styleUrls: ['../app/experience/experience.less']
        }), 
        __metadata('design:paramtypes', [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());
exports.ExperienceComponent = ExperienceComponent;
//# sourceMappingURL=experience.component.js.map