


export class Book {

    
    public id: number = 0;
    public title: string = null;
    public author: string = null;
    public added: Date = null;
    public tags: string[] = [];
    public lists: string[] = [];

    public static fromJson(model: any): Book {
        var o = new Book();
        
        o.id = model.id;
        o.title = model.title;
        o.author = model.author;
        o.added = new Date(model.added);
        o.tags = model.tags;
        o.lists = model.lists;
        return o;
    }
}
