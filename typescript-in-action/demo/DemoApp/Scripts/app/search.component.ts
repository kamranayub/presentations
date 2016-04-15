import {Component, OnInit} from 'angular2/core'
import {Router, RouteParams} from 'angular2/router'

import {BookService} from './book.service'

@Component({
    styles: [`
    ul li { margin-bottom: 1em; }
    `],
    templateUrl: 'scripts/app/search.component.html'
})
export class SearchComponent implements OnInit {
    public query: string;

    public searchResults = [];

    public sortBy = "Name";

    constructor(
        private _routeParams: RouteParams,
        private _router: Router,
        private _bookService: BookService) {
        
    }
        
    ngOnInit() {
        // TODO 3. Fill `search` and `sortBy` from URL

        // TODO 4. Call BookService and fill in results
    }    
    
    addBook(id: number) {
        // TODO 5. Call BookService and add requested book to user's collection
    }
}