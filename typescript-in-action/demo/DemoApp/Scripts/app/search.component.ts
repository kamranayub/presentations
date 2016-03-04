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

    public searchResults: any[] = [];

    constructor(
        private _bookService: BookService,
        private _routeParams: RouteParams,
        private _router: Router) {
        
    }

    ngOnInit() {
        this.query = decodeURI(this._routeParams.get('query'));

        this._bookService.search(this.query)
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