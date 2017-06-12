
export class Book {
  public author: string;
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string, author: string) {
    this.author = author
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
