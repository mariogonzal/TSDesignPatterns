import { IService } from "./UserService/IService";

export class IoCContainer
{
     private static _instance:IoCContainer = new IoCContainer();
     private _dependencies:{[key:string]:object}={};

    private constructor()
    {
        if(IoCContainer._instance){
            throw new Error("Singleton cannot be instantiated");                        
        }
        IoCContainer._instance=this;
    }

    public static get  instance():IoCContainer{
        return IoCContainer._instance;
    }

    register(name:string,_dependencies:string[], impmeentation:any){
        if(this._dependencies[name]){
            throw new Error("Already registered "+name);
        }
        let dependencies=this.getDependenciesImplementations(_dependencies);
        this._dependencies[name]=new impmeentation(...dependencies);

    }

    resolve<T extends IService>(name:string):T{
        if(!this._dependencies[name]){
            throw new Error(`Unresolved dependency ${name}`)
        }
        return this._dependencies[name] as T;

    }

    private getDependenciesImplementations(names:string[]):object[]{
        return names.map(name=>this.resolve(name));
    }
}