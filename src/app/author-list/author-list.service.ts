import { Author } from '../shared/author.model';
import { Subject } from 'rxjs/Subject';

export class AuthorListService {
  authorsChanged = new Subject<Author[]>();
  startedEditing = new Subject<number>();
  private authors: Author[] = [
    new Author('Joanne', 'Rowling', 'http://www.careergirldaily.com/wp-content/uploads/2015/03/jon17.jpg'),
    new Author('Дмитрий', 'Длужневский', ''),
  ];

  getAuthors() {
    return this.authors.slice();
  }

  getAuthor(index: number) {
    return this.authors[index];
  }

  addAuthor(author: Author) {
    this.authors.push(author);
    this.authorsChanged.next(this.authors.slice());
  }

  addAuthors(authors: Author[]) {
    this.authors.push(...authors);
    this.authorsChanged.next(this.authors.slice());
  }

  updateAuthor(index: number, newAuthor: Author) {
    this.authors[index] = newAuthor;
    this.authorsChanged.next(this.authors.slice());
  }

  deleteAuthor(index: number) {
    this.authors.splice(index, 1);
    this.authorsChanged.next(this.authors.slice());
  }
}
