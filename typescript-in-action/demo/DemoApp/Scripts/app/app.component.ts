import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS}    from 'angular2/http';

import {BookListComponent} from './booklist.component'
import {SearchComponent} from './search.component'
import {BookService} from './book.service'

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

    constructor(private _bookService: BookService) { }

    // TODO 2. Capture `searchQuery` from form input    
    // and then navigate to search results
    search() {
        
    }
}