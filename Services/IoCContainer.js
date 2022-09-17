"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.IoCContainer = void 0;
var IoCContainer = /** @class */ (function () {
    function IoCContainer() {
        this._dependencies = {};
        if (IoCContainer._instance) {
            throw new Error("Singleton cannot be instantiated");
        }
        IoCContainer._instance = this;
    }
    Object.defineProperty(IoCContainer, "instance", {
        get: function () {
            return IoCContainer._instance;
        },
        enumerable: false,
        configurable: true
    });
    IoCContainer.prototype.register = function (name, _dependencies, impmeentation) {
        if (this._dependencies[name]) {
            throw new Error("Already registered " + name);
        }
        var dependencies = this.getDependenciesImplementations(_dependencies);
        this._dependencies[name] = new (impmeentation.bind.apply(impmeentation, __spreadArray([void 0], dependencies, false)))();
    };
    IoCContainer.prototype.resolve = function (name) {
        if (!this._dependencies[name]) {
            throw new Error("Unresolved dependency ".concat(name));
        }
        return this._dependencies[name];
    };
    IoCContainer.prototype.getDependenciesImplementations = function (names) {
        var _this = this;
        return names.map(function (name) { return _this.resolve(name); });
    };
    IoCContainer._instance = new IoCContainer();
    return IoCContainer;
}());
exports.IoCContainer = IoCContainer;
