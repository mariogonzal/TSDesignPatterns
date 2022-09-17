"use strict";
exports.__esModule = true;
exports.UserRepository = void 0;
var User_1 = require("../../Model/User");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.GetAll = function () {
        var user = new User_1.User();
        var users;
        users.push(user);
        return users;
    };
    UserRepository.prototype.GetById = function () {
        return new User_1.User();
    };
    UserRepository.prototype.Delete = function (entity) {
        return true;
    };
    UserRepository.prototype.Update = function (entity) {
        return true;
    };
    UserRepository.prototype.Create = function (entity) {
        return true;
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
