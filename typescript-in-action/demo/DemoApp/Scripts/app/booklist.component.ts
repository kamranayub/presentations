import {Component, OnInit} from 'angular2/core'

import {BookService} from './book.service'

@Component({
    selector: 'book-list',
    styleUrls: ['scripts/app/booklist.component.css'],
    templateUrl: 'scripts/app/booklist.component.html'    
})
export class BookListComponent implements OnInit {
    public books: any[];

    constructor(private _bookService: BookService) {
        
    }

    ngOnInit() {
        this._bookService.getBooks()
            .then(results => this.books = results);
    }
}