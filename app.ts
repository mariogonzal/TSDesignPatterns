import {User} from "./Model/User";
import { UserRepository } from "./Repositories/UserRepository/UserRepository";
import { IoCContainer } from "./Services/IoCContainer";
import { IUserService } from "./Services/UserService/IUserServce";
import { UserService } from "./Services/UserService/UserService";



console.log("Testing IoC Container");

//IoC Container Registering 
let ioCContainer=IoCContainer.instance;
ioCContainer.register("IRepository<User>",[],UserRepository)
ioCContainer.register("IUserService",["IRepository<User>"],UserService);
//IoC Container Resolving
let userService=ioCContainer.resolve<IUserService>("IUserService");

//Calling a Method from a resolving Service
let foundUser=userService.GetUserById("mario");
//Printing Service
console.log(foundUser);