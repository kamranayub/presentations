
import {DateStringConverter} from './Decorators'


export class SearchResult {

    
    private _id: number = 0;
    public get id(): number { return this._id; }
    
    public set id(value: number) { this._id = value; }
    private _title: string = null;
    public get title(): string { return this._title; }
    
    public set title(value: string) { this._title = value; }
    private _author: string = null;
    public get author(): string { return this._author; }
    
    public set author(value: string) { this._author = value; }

    public static fromJson(model: any): SearchResult {
        var o = new SearchResult();
        
        o.id = model.id;
        o.title = model.title;
        o.author = model.author;
        return o;
    }
}
