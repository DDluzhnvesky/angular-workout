import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { BookService } from '../book.service';

import { Author } from "app/shared/author.model";
import { AuthorListService } from "app/author-list/author-list.service";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: number;
  editMode = false;
  bookForm: FormGroup;
  authors: Author[]

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private router: Router,
              private authorListService: AuthorListService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );

      this.getAuthors();
  }

  getAuthors() {
    this.authors = this.authorListService.getAuthors();
  }

  onSubmit() {
    if (this.editMode) {
      this.bookService.updateBook(this.id, this.bookForm.value);
    } else {
      this.bookService.addBook(this.bookForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let bookName = '';
    let bookImagePath = '';
    let bookDescription = '';
    let bookAuthor = '';

    if (this.editMode) {
      const book = this.bookService.getBook(this.id);
      bookName = book.name;
      bookImagePath = book.imagePath;
      bookDescription = book.description;
      bookAuthor = book.author;
    }
    let b = new FormControl(bookAuthor, Validators.required).setValue("")
    this.bookForm = new FormGroup({
      'name': new FormControl(bookName, Validators.required),
      'imagePath': new FormControl(bookImagePath, Validators.required),
      'description': new FormControl(bookDescription, Validators.required),
      'author': new FormControl(bookAuthor, Validators.required)
    });
  }

}
