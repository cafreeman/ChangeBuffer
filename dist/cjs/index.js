"use strict";
var fp_1 = require('lodash/fp');
var ChangeBuffer = (function () {
    function ChangeBuffer(object) {
        this.object = this.buffer = object;
    }
    ChangeBuffer.prototype.isClean = function () {
        return this.object === this.buffer;
    };
    ChangeBuffer.prototype.isDirty = function () {
        return this.object !== this.buffer;
    };
    ChangeBuffer.prototype.rollback = function () {
        this.buffer = this.object;
        return this.buffer;
    };
    ChangeBuffer.prototype.get = function (path) {
        return fp_1.get(path, this.buffer);
    };
    ChangeBuffer.prototype.set = function (path, newValue) {
        this.buffer = fp_1.set(path, newValue, this.buffer);
    };
    ChangeBuffer.prototype.apply = function () {
        return this.buffer;
    };
    return ChangeBuffer;
}());
exports.ChangeBuffer = ChangeBuffer;
//# sourceMappingURL=index.js.map