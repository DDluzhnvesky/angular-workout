import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Author } from '../../shared/author.model';
import { AuthorListService } from '../author-list.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') alForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Author;


  constructor(private alService: AuthorListService) { }

  ngOnInit() {
    this.subscription = this.alService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.alService.getAuthor(index);
          this.alForm.setValue({
            firstName: this.editedItem.firstName,
            lastName: this.editedItem.lastName,
            photoUrl: this.editedItem.photoUrl
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newAuthor = new Author(value.firstName, value.lastName, value.photoUrl);
    if (this.editMode) {
      this.alService.updateAuthor(this.editedItemIndex, newAuthor);
    } else {
      this.alService.addAuthor(newAuthor);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.alForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.alService.deleteAuthor(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
