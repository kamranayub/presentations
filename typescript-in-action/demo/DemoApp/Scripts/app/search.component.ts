import {Component, OnInit} from 'angular2/core'
import {Router, RouteParams} from 'angular2/router'

import {BookService} from './book.service'
import {SearchResult} from './SearchResult'

/**
 * Search RouteParams
 */
interface SearchRouteParams {
    query?: string;
    sortBy?: string;
}

/**
 * Strongly-typed version of RouteParams. Extends Angular declaration.
 */
interface RouteParamsOf<T> extends RouteParams {
    get(param: keyof T): string;
}

@Component({
    styles: [`
    ul li { margin-bottom: 1em; }
    `],
    templateUrl: 'scripts/app/search.component.html'
})
export class SearchComponent implements OnInit {
    public query: string;

    public searchResults: SearchResult[] = [];

    public sortBy: SortBy = "Name";

    constructor(
        private _bookService: BookService,
        private _routeParams: RouteParamsOf<SearchRouteParams>,
        private _router: Router) {
        
    }

    ngOnInit() {
        this.query = decodeURI(this._routeParams.get('query'));
        this.sortBy = <SortBy>this._routeParams.get('sortBy') || "Name";

        this._bookService.search(this.query, this.sortBy)
            .subscribe(results =>
                this.searchResults = results);
    }

    addBook(id: number) {
        this._bookService.postBook(id)
            .subscribe(book => {
                alert("Successfully added book: " + book.title);
                this._router.navigate(['Books']);
            });
    }
}