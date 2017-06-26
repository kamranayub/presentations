import {Component, OnInit} from 'angular2/core'

import {BookService} from './book.service'
import {Book} from './Book'

@Component({
    selector: 'book-list',
    styleUrls: ['scripts/app/booklist.component.css'],
    templateUrl: 'scripts/app/booklist.component.html'    
})
export class BookListComponent implements OnInit {
    public books: Book[];

    constructor(private _bookService: BookService) {
        
    }

    ngOnInit() {
        this._bookService.getBooks()
            .subscribe(results => this.books = results);
    }
}