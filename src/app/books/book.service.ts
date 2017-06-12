import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Book } from './book.model';
import { Author } from '../shared/author.model';
import { AuthorListService } from '../author-list/author-list.service';

@Injectable()
export class BookService {
  booksChanged = new Subject<Book[]>();

  private books: Book[] = [
    new Book(
      'Half-Blood Prince !',
      'nice book',
      'http://hpclub.ru/wp-content/uploads/2013/07/kkhp6.jpg',
      'Joanne Rowling',
      ),
    new Book(
      'Order of the Phoenix',
      'nice book',
      'https://ccbc.education.wisc.edu/_images/books/harrypotterandtheorder.jpg',
      'Joanne Rowling',
      )
  ];

  constructor(private alService: AuthorListService) {}

  setBooks(books: Book[]) {
    this.books = books;
    this.booksChanged.next(this.books.slice());
  }

  getBooks() {
    return this.books.slice();
  }

  getBook(index: number) {
    return this.books[index];
  }

  addBook(book: Book) {
    this.books.push(book);
    this.booksChanged.next(this.books.slice());
  }

  updateBook(index: number, newBook: Book) {
    this.books[index] = newBook;
    this.booksChanged.next(this.books.slice());
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    this.booksChanged.next(this.books.slice());
  }
}
