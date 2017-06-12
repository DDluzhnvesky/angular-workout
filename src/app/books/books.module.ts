import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books.component';
import { BookStartComponent } from './book-start/book-start.component';

import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BookListComponent } from "app/books/book-list/book-list.component";

@NgModule({
  declarations: [
    BooksComponent,
    BookStartComponent,
    BookListComponent,
    BookEditComponent,
    BookDetailComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    SharedModule
  ]
})
export class BooksModule {}
