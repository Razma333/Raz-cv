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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../app/app.component.html',
            styleUrls: ['../app/app.component.less']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var window_1 = require('../../app/shared/window');
var platform_browser_1 = require('@angular/platform-browser');
var CvNavbarComponent = (function () {
    function CvNavbarComponent(windowRef, document) {
        this.windowRef = windowRef;
        this.document = document;
        this.btnForNavbar = false;
        this.openNavLeft = 'close';
        this.window = windowRef;
    }
    CvNavbarComponent.prototype.ngOnInit = function () {
        this.isMobile = this.window.isMobile;
    };
    CvNavbarComponent.prototype.openNavbar = function () {
        if (this.openNavLeft == 'open') {
            this.openNavLeft = 'close';
        }
        else {
            this.openNavLeft = 'open';
        }
    };
    CvNavbarComponent.prototype.onWindowScroll = function () {
        var offset = this.document.body.scrollTop;
        if (offset > 100 && !this.isMobile) {
            if (!this.btnForNavbar) {
                this.btnForNavbar = true;
            }
        }
        else if (this.btnForNavbar && offset < 100) {
            if (this.btnForNavbar) {
                this.btnForNavbar = false;
                this.openNavLeft = 'close';
            }
        }
    };
    __decorate([
        core_1.HostListener("window:scroll", []), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], CvNavbarComponent.prototype, "onWindowScroll", null);
    CvNavbarComponent = __decorate([
        core_1.Component({
            selector: 'cv-navbar',
            templateUrl: '../app/cv-navbar/cv-navbar.component.html',
            styleUrls: ['../app/cv-navbar/cv-navbar.component.less'],
            animations: [
                core_1.trigger('navbarLeft', [
                    core_1.state('open', core_1.style({
                        top: '0'
                    })),
                    core_1.transition('void => open', core_1.animate('1s linear', core_1.keyframes([
                        core_1.style({ top: '-70px', offset: 0 }),
                        core_1.style({ top: '0', offset: 1 })
                    ]))),
                    core_1.transition('open => void', core_1.animate('1s linear', core_1.style({
                        top: '-70px'
                    })))
                ]),
                core_1.trigger('fixedNavOpen', [
                    core_1.state('open', core_1.style({
                        top: '70px'
                    })),
                    core_1.state('close', core_1.style({
                        top: '0px'
                    })),
                    core_1.transition('close => open', core_1.animate('1s linear', core_1.style({
                        top: '70px'
                    }))),
                    core_1.transition('open => close', core_1.animate('1s linear', core_1.style({
                        top: '0px'
                    }))),
                    core_1.transition('void => close', core_1.animate('1s linear', core_1.keyframes([
                        core_1.style({ top: '-70px', offset: 0 }),
                        core_1.style({ top: '0px', offset: 1 })
                    ]))),
                    core_1.transition('close => void', core_1.animate('1s linear', core_1.keyframes([
                        core_1.style({ top: '0px', offset: 0 }),
                        core_1.style({ top: '-70px', offset: 1 })
                    ])))
                ])
            ],
            providers: [window_1.WindowRef]
        }),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [window_1.WindowRef, Document])
    ], CvNavbarComponent);
    return CvNavbarComponent;
}());
exports.CvNavbarComponent = CvNavbarComponent;
//# sourceMappingURL=cv-navbar.component.js.map
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
var direction_enum_1 = require('../../../app/models/enums/direction.enum');
var enums_converter_1 = require('../../../app/models/enums/enums-converter/enums-converter');
var ArrowFloatingComponent = (function () {
    function ArrowFloatingComponent(enumsConverter) {
        this.enumsConverter = enumsConverter;
        this.defaultDirection = direction_enum_1.DirectionsEnum['up'];
    }
    ArrowFloatingComponent.prototype.ngOnInit = function () {
        this.arrowDirectionChecker(this.floatingDirection);
        this.animationDirectionSetter(this.floatingDirection);
    };
    ArrowFloatingComponent.prototype.arrowDirectionChecker = function (direction) {
        var good = this.enumsConverter.directionToNumber(this.floatingDirection);
        if (!good)
            throw new TypeError('not a vaild direction');
    };
    ArrowFloatingComponent.prototype.animationDirectionSetter = function (inputDirection) {
        this.animationDirection = inputDirection ? inputDirection : this.enumsConverter.numberToDirectionString(this.defaultDirection);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ArrowFloatingComponent.prototype, "floatingDirection", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ArrowFloatingComponent.prototype, "imageUrl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ArrowFloatingComponent.prototype, "message", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ArrowFloatingComponent.prototype, "moveText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ArrowFloatingComponent.prototype, "spaceWidth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ArrowFloatingComponent.prototype, "spaceHeight", void 0);
    ArrowFloatingComponent = __decorate([
        core_1.Component({
            selector: 'arrow-floating',
            templateUrl: '../../app/effects/arrow-floating/arrow-floating.component.html',
            styleUrls: ['../../app/effects/arrow-floating/arrow-floating.less'],
            providers: [enums_converter_1.EnumsConverter]
        }), 
        __metadata('design:paramtypes', [enums_converter_1.EnumsConverter])
    ], ArrowFloatingComponent);
    return ArrowFloatingComponent;
}());
exports.ArrowFloatingComponent = ArrowFloatingComponent;
//# sourceMappingURL=arrow-floating.component.js.map
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
var ArrowFloatingDirective = (function () {
    function ArrowFloatingDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ArrowFloatingDirective.prototype.ngOnInit = function () {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', this.containerWidth);
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'height', this.containerHeight);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ArrowFloatingDirective.prototype, "containerWidth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ArrowFloatingDirective.prototype, "containerHeight", void 0);
    ArrowFloatingDirective = __decorate([
        core_1.Directive({
            selector: '[arrow-floating-style]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], ArrowFloatingDirective);
    return ArrowFloatingDirective;
}());
exports.ArrowFloatingDirective = ArrowFloatingDirective;
//# sourceMappingURL=arrow-floating.directive.js.map
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
var Rx_1 = require('rxjs/Rx');
var BombComponent = (function () {
    function BombComponent() {
        this.show = true;
        this.bombFinish = false;
        this.activeBomb = 'active';
        this.activeRow = 'inactive';
        this.closeLogosBomb = 'active';
    }
    BombComponent.prototype.timerInit = function (timeDelay, tickInterval) {
        var timer = Rx_1.Observable.timer(timeDelay, tickInterval);
        return timer;
    };
    BombComponent.prototype.animationStarter = function (timeDelay, tickInterval) {
        var _this = this;
        var timer = this.timerInit(timeDelay, tickInterval);
        var timerSubscribe = timer.subscribe(function (time) {
            if (time == 5) {
                _this.bombFinish = true;
                _this.closeLogosBomb = 'close';
                _this.activeRow = 'active';
            }
            else if (time == 10) {
                _this.show = false;
                _this.activeBomb = 'close';
                timerSubscribe.unsubscribe();
            }
        });
    };
    BombComponent.prototype.ngOnInit = function () {
        this.animationStarter(0, 1000);
    };
    BombComponent = __decorate([
        core_1.Component({
            selector: 'bomb',
            templateUrl: '../app/effects/bomb/bomb.component.html',
            styleUrls: ['../app/effects/bomb/bomb.less'],
            animations: [
                core_1.trigger('bombShow', [
                    core_1.state('active', core_1.style({
                        background: 'rgba(0, 0, 0, 0.8)'
                    })),
                    core_1.transition('active => void', core_1.animate('1s linear', core_1.style({
                        background: 'rgba(255, 255, 255, 0.6)'
                    })))
                ]),
                core_1.trigger('closeLogosBomb', [
                    core_1.state('close', core_1.style({
                        transform: 'scale(0.2)'
                    })),
                    core_1.transition('close => void', core_1.animate('0.5s linear', core_1.style({
                        transform: 'scale(0)'
                    })))
                ]),
                core_1.trigger('rowShow', [
                    core_1.state('active', core_1.style({
                        transform: 'translate(-50%, -50%) scale(1)'
                    })),
                    core_1.transition('void => active', core_1.animate('2s ease-in-out', core_1.keyframes([
                        core_1.style({ transform: 'translate(-50%, -50%) scale(1)', offset: 0 }),
                        core_1.style({ transform: 'translate(-50%, -50%) scale(1)', offset: 0.25 }),
                        core_1.style({ transform: 'translate(-50%, -50%) scale(1.3)', offset: 0.5 }),
                        core_1.style({ transform: 'translate(-50%, -50%) scale(1)', offset: 1 }),
                    ])))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BombComponent);
    return BombComponent;
}());
exports.BombComponent = BombComponent;
//# sourceMappingURL=bomb.component.js.map
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
var Rx_1 = require('rxjs/Rx');
var LogosSpinnerComponent = (function () {
    function LogosSpinnerComponent() {
        this.show = true;
        this.active = 'active';
    }
    LogosSpinnerComponent.prototype.timerInit = function (miliDelay, miliTick) {
        var _this = this;
        var timer = Rx_1.Observable.timer(miliDelay, miliTick);
        var timerSubscribe = timer.subscribe(function (ticks) {
            _this.show = false;
            _this.active = 'null';
            timerSubscribe.unsubscribe();
        });
    };
    LogosSpinnerComponent.prototype.ngOnInit = function () {
        this.timerInit(5000000, 0);
    };
    LogosSpinnerComponent = __decorate([
        core_1.Component({
            selector: 'logos-spinner',
            templateUrl: '../app/effects/logos-spinner/logos-spinner.component.html',
            styleUrls: ['../app/effects/logos-spinner/logos-spinner.less'],
            animations: [
                core_1.trigger('spinnerShow', [
                    core_1.state('active', core_1.style({
                        background: 'rgba(0, 0, 0, 0.8)'
                    })),
                    core_1.transition('active => void', core_1.animate('1s linear', core_1.style({
                        background: 'rgba(255, 255, 255, 0.6)'
                    })))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LogosSpinnerComponent);
    return LogosSpinnerComponent;
}());
exports.LogosSpinnerComponent = LogosSpinnerComponent;
//# sourceMappingURL=logos-spinner.component.js.map
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
"use strict";
(function (DirectionsEnum) {
    DirectionsEnum[DirectionsEnum["up"] = 1] = "up";
    DirectionsEnum[DirectionsEnum["right"] = 2] = "right";
    DirectionsEnum[DirectionsEnum["down"] = 3] = "down";
    DirectionsEnum[DirectionsEnum["left"] = 4] = "left";
})(exports.DirectionsEnum || (exports.DirectionsEnum = {}));
var DirectionsEnum = exports.DirectionsEnum;
//# sourceMappingURL=direction.enum.js.map
"use strict";
var direction_enum_1 = require('../direction.enum');
var EnumsConverter = (function () {
    function EnumsConverter() {
    }
    EnumsConverter.prototype.directionToNumber = function (direction) {
        if (direction) {
            return direction_enum_1.DirectionsEnum[direction];
        }
    };
    EnumsConverter.prototype.numberToDirectionString = function (directionNumber) {
        return direction_enum_1.DirectionsEnum[directionNumber];
    };
    return EnumsConverter;
}());
exports.EnumsConverter = EnumsConverter;
//# sourceMappingURL=enums-converter.js.map
"use strict";
var ProgrammingLanguageModel = (function () {
    function ProgrammingLanguageModel() {
    }
    return ProgrammingLanguageModel;
}());
exports.ProgrammingLanguageModel = ProgrammingLanguageModel;
//# sourceMappingURL=programming-language.model.js.map
"use strict";
var TechCourseModel = (function () {
    function TechCourseModel() {
    }
    return TechCourseModel;
}());
exports.TechCourseModel = TechCourseModel;
//# sourceMappingURL=tech-course.model.js.map
"use strict";
var WorkModel = (function () {
    function WorkModel() {
    }
    return WorkModel;
}());
exports.WorkModel = WorkModel;
//# sourceMappingURL=work.model.js.map
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
function _window() {
    return window;
}
function _isMobile() {
    return window.screen.width < 768;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowRef.prototype, "isMobile", {
        get: function () {
            return _isMobile();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WindowRef);
    return WindowRef;
}());
exports.WindowRef = WindowRef;
//# sourceMappingURL=Window.js.map
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
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app/app.module');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map
/**
 * Add barrels and stuff
 * Adjust as necessary for your application needs.
 */
// (function (global) {
//   System.config({
//     packages: {
//       // add packages here
//     }
//   });
// })(this);

/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
