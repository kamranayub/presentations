import {Component} from 'angular2/core'
import {Router, RouteParams} from 'angular2/router'

@Component({
    styles: [`
    ul li { margin-bottom: 1em; }
    `],
    templateUrl: 'scripts/app/search.component.html'
})
export class SearchComponent {
    public query: string;

    public searchResults = [];

    public sortBy = "Name";

    constructor(
        private _routeParams: RouteParams,
        private _router: Router) {
        
    }
    
    // TODO fill `search` and `sortBy` from URL

    // TODO call API and fill in results
    
    addBook(id: number) {
        // TODO implement add book
    }
}