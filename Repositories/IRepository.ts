export interface IRepository<Entity> {
   GetAll():Entity[];
   GetById():Entity;
   Create(entity:Entity):boolean;
   Update(entity:Entity):boolean;
   Delete(entity:Entity):boolean;
        
    }
