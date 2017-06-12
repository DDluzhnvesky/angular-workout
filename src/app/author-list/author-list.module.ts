import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthorListComponent } from './author-list.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';

@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthorListModule {}
