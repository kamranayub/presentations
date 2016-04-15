
import {DateStringConverter} from './Decorators'


export class Book {

    
    private _id: number = 0;
    public get id(): number { return this._id; }
    
    public set id(value: number) { this._id = value; }
    private _title: string = null;
    public get title(): string { return this._title; }
    
    public set title(value: string) { this._title = value; }
    private _author: string = null;
    public get author(): string { return this._author; }
    
    public set author(value: string) { this._author = value; }
    private _added: Date = null;
    public get added(): Date { return this._added; }
    @DateStringConverter
    public set added(value: Date) { this._added = value; }
    private _tags: string[] = [];
    public get tags(): string[] { return this._tags; }
    
    public set tags(value: string[]) { this._tags = value; }
    private _lists: string[] = [];
    public get lists(): string[] { return this._lists; }
    
    public set lists(value: string[]) { this._lists = value; }

    public static fromJson(model: any): Book {
        var o = new Book();
        
        o.id = model.id;
        o.title = model.title;
        o.author = model.author;
        o.added = model.added;
        o.tags = model.tags;
        o.lists = model.lists;
        return o;
    }
}
