import { User } from "../../Model/User"


export interface IUserService{
    GetUserById(userId:string):User;
    GetAllUsers():User[];
}