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