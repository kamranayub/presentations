import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'

import {BookService} from './book.service'

@Component({
    templateUrl: 'scripts/app/search.component.html'
})
export class SearchComponent implements OnInit {
    public query: string;

    public searchResults: any[] = [];

    constructor(
        private _bookService: BookService,
        private _routeParams: RouteParams) {
        
    }

    ngOnInit() {
        this.query = decodeURI(this._routeParams.get('query'));

        this._bookService.search(this.query)
            .subscribe(results =>
                this.searchResults = results);
    }

    addBook(id: number) {
        // TODO
    }
}