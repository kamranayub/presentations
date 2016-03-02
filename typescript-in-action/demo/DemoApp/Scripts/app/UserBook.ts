


import {Book} from './Book'
export class UserBook extends Book {

    
    public added: Date = null;
    public tags: string[] = [];
    public lists: string[] = [];

    public static fromJson (model: any): UserBook {
        var o = <UserBook>Book.fromJson(model);
        
        o.added = new Date(model.added);
        o.tags = model.tags;
        o.lists = model.lists;
        return o;
    }
}
