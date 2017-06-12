import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  subscription: Subscription;
  filteredItems: Book[]

  constructor(private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.bookService.booksChanged
      .subscribe(
      (books: Book[]) => {
        this.books = books;
      }
      );
    this.books = this.bookService.getBooks();
    this.assignCopy();
  }

  assignCopy() {
    this.filteredItems = Object.assign([], this.books);
  }

  filterItem(value) {
    if (!value) this.assignCopy(); //when nothing has typed
    this.filteredItems = Object.assign([], this.books).filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }


onNewBook() {
  this.router.navigate(['new'], { relativeTo: this.route });
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
