import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Author } from '../shared/author.model';
import { AuthorListService } from './author-list.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, OnDestroy {
  authors: Author[];
  photoUrl: string;
  detailsActive: boolean = false;

  private subscription: Subscription;

  constructor(private alService: AuthorListService) { }

  ngOnInit() {
    this.authors = this.alService.getAuthors();
    this.subscription = this.alService.authorsChanged
      .subscribe(
        (authors: Author[]) => {
          this.authors = authors;
        }
      );
  }

  onEditItem(index: number) {
    this.alService.startedEditing.next(index);
   
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
