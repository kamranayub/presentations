import {Injectable} from 'angular2/core'
import {Http, Response} from 'angular2/http'
import {Observable} from 'rxjs/Observable'

import {Book} from './Book'
import {UserBook} from './UserBook'

@Injectable()
export class BookService {

    constructor(private _http: Http) {}

    getBooks() {
        return this._http.get('/api/books')
            .map(res => (<UserBook[]>res.json().data).map(UserBook.fromJson))
            .catch(this._handleError);
    }

    search(query: string) {
        return this._http.get('/api/books/search?query=' + query)
            .map(res => <Book[]>res.json().data)
            .catch(this._handleError);
    }

    private _handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}