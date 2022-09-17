"use strict";
exports.__esModule = true;
var UserRepository_1 = require("./Repositories/UserRepository/UserRepository");
var IoCContainer_1 = require("./Services/IoCContainer");
var UserService_1 = require("./Services/UserService/UserService");
console.log("Testing IoC Container");
//IoC Container Registering 
var ioCContainer = IoCContainer_1.IoCContainer.instance;
ioCContainer.register("IRepository<User>", [], UserRepository_1.UserRepository);
ioCContainer.register("IUserService", ["IRepository<User>"], UserService_1.UserService);
//IoC Container Resolving
var userService = ioCContainer.resolve("IUserService");
//Calling a Method from a resolving Service
var foundUser = userService.GetUserById("mario");
//Printing Service
console.log(foundUser);
