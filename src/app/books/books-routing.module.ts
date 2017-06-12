import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookStartComponent } from './book-start/book-start.component';
import { BooksComponent } from './books.component';

const booksRoutes: Routes = [
  { path: '', component: BooksComponent, children: [
    { path: '', component: BookStartComponent },
    { path: 'new', component: BookEditComponent },
    { path: ':id', component: BookDetailComponent },
    { path: ':id/edit', component: BookEditComponent },
  ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(booksRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class BooksRoutingModule {}
