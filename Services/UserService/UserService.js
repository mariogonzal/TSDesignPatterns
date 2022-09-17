"use strict";
exports.__esModule = true;
exports.UserService = void 0;
var User_1 = require("../../Model/User");
var UserService = /** @class */ (function () {
    function UserService(UserRepo) {
        this.userRepo = UserRepo;
    }
    UserService.prototype.GetAllUsers = function () {
        var users;
        users.push(new User_1.User());
        return users;
    };
    UserService.prototype.GetUserById = function (userId) {
        var user = new User_1.User();
        user.Name = "Mario";
        return user;
    };
    return UserService;
}());
exports.UserService = UserService;
