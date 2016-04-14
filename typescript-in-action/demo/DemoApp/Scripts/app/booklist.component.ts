import {Component} from 'angular2/core'

// ES7 Decorators
@Component({
    selector: 'book-list',
    styleUrls: ['scripts/app/booklist.component.css'],
    templateUrl: 'scripts/app/booklist.component.html'    
})
export class BookListComponent {
    // Classes
    
    public books = [];

    constructor() {
        
    }

    // TODO 1. Get my books from BookService on "init"
}