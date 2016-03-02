import {Injectable} from 'angular2/core'

import {SEARCH_RESULTS, LIST} from './mock-books'

@Injectable()
export class BookService {

    getBooks() {
        return Promise.resolve(LIST);
    }

    search(query: string) {
        return Promise.resolve(SEARCH_RESULTS);
    }

}