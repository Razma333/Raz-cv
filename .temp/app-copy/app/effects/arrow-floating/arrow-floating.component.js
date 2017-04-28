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