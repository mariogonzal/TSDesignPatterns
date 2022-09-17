import { IRepository } from "../../Repositories/IRepository";
import { IUserService } from "./IUserServce";
import { User } from "../../Model/User";

export class UserService implements IUserService{
    private userRepo:IRepository<User>;
    public constructor(UserRepo:IRepository<User> ){
        this.userRepo=UserRepo;
    }
    public GetAllUsers(): User[] {
        
        let users:User[];
        users.push(new User());
        return users;
    }

    public GetUserById(userId: string): User {
        let user:User=new User();
        user.Name="Mario";
        return user;
    }
}