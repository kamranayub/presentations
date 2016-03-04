import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS}    from 'angular2/http';

import {BookService} from './book.service'
import {BookListComponent} from './booklist.component'
import {SearchComponent} from './search.component'

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [BookService, ROUTER_PROVIDERS, HTTP_PROVIDERS],
    styleUrls: ['scripts/app/app.component.css'],
    templateUrl: 'scripts/app/app.component.html'
})
@RouteConfig([
    {
        path: '/books',
        name: 'Books',
        component: BookListComponent,
        useAsDefault: true
    },
    {
        path: '/search',
        name: 'Search',
        component: SearchComponent        
    }
])
export class AppComponent {

    public searchQuery: string = "";

    constructor(private _router: Router) {

    }
    
    search() {
        this._router.navigate(['Search', { query: this.searchQuery }]).then(
            () => this.searchQuery = '');
    }
}