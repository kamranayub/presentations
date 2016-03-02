import {Injectable} from 'angular2/core'
import {Http, Response} from 'angular2/http'
import {Observable} from 'rxjs/Observable'

import {Book, UserBook} from './models'

@Injectable()
export class BookService {

    constructor(private _http: Http) {}

    getBooks() {
        return this._http.get('/api/books')
            .map(res => (<UserBook[]>res.json().data).map(this._mapUserBook))
            .catch(this._handleError);
    }

    search(query: string) {
        return this._http.get('/api/books/search?query=' + query)
            .map(res => <Book[]>res.json().data)
            .catch(this._handleError);
    }

    private _mapUserBook(book: UserBook) {
        book.added = new Date(<any>book.added);
        return book;
    }

    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}