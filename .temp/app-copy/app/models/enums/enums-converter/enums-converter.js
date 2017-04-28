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