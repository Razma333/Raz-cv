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