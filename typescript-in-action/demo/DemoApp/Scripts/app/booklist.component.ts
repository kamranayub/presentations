import {Component} from 'angular2/core'

@Component({
    selector: 'book-list',
    styleUrls: ['scripts/app/booklist.component.css'],
    templateUrl: 'scripts/app/booklist.component.html'    
})
export class BookListComponent {
    public books = [];

    constructor() {
        
    }

    // TODO get my books    

    // TODO BONUS: Implement lists
}