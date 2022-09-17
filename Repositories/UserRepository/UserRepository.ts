import { IRepository } from "../IRepository"
import { User } from "../../Model/User"
export class UserRepository implements IRepository<User>{
    public GetAll(): User[] {
        let user:User=new User();
        let users: User[];
        users.push(user);
        return users;
    }

    public GetById(): User {
        return new  User();
    }

    public Delete(entity: User): boolean {
        return true;
    }

    public Update(entity: User): boolean {
        return true;
    }

    public Create(entity: User): boolean {
        return true;
    }

}