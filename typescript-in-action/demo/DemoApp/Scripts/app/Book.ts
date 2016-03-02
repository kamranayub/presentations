


export class Book  {

    
    public id: number = 0;
    public title: string = null;
    public author: string = null;

    public static fromJson (model: any): Book {
        var o = new Book ();
        
        o.id = model.id;
        o.title = model.title;
        o.author = model.author;
        return o;
    }
}
