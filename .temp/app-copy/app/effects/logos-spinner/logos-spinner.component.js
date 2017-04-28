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