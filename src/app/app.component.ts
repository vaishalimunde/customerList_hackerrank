import {Component} from '@angular/core';
import {Item} from "../types/Item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Book: string = 'Book';
  Song: string = 'Song';
  books: Item[] = [];
  songs: Item[] = [];


  constructor() {

  }

  ngOnInit() {

  }
  onItemAdded(item: Item) {
    // if (item.type === this.Book) {
    //   this.books.push(item);
    //   console.log(this.books)
    // } else if (item.type === this.Song) {
    //   this.songs.push(item);
    // }

    if (item.type === this.Book) {
      this.books.push(item);
    } else if (item.type === this.Song) {
      // Ensure the type property of the item is explicitly set to 'Song'
      this.songs.push(item);
    }
  }

  onItemDelete(item) {
    if (item.type === this.Book) {
      this.books = this.books.filter(book => book.name !== item.name);
    } else if (item.type === this.Song) {
      this.songs = this.songs.filter(song => song.name !== item.name);
    }
  }
  
}
