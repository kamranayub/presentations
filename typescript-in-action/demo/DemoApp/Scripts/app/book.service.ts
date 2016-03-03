

import {Injectable} from 'angular2/core'
import {Http, Response} from 'angular2/http'
import {Observable} from 'rxjs/Observable'

import {Book} from './Book'
import {SearchResult} from './SearchResult'

@Injectable()
export class BookService {

    constructor(private _http: Http) { }

    
    getBooks() {
        return this._http.get(`api/books`, null)
            .map(res => (<Book[]>res.json().data).map(Book.fromJson))
            .catch(this._handleError);
    }
    postBook(id: number) {
        return this._http.post(`api/books/${id}`, null)
            .map(res => Book.fromJson(res.json().data))
            .catch(this._handleError);
    }
    search(query: string) {
        return this._http.get(`api/books/search?query=${query}`, null)
            .map(res => (<SearchResult[]>res.json().data).map(SearchResult.fromJson))
            .catch(this._handleError);
    }

    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}