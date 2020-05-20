import { LoggerService } from '../core/logger.service';
import { DataService } from '../core/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'app/models/book';
import { allBooks } from 'app/data';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styles: []
})
export class EditBookComponent implements OnInit {

  selectedBook: Book;

  constructor(private route: ActivatedRoute,private dataService:DataService,private loggerService:LoggerService) { }

  ngOnInit() {
    let bookID: number = parseInt(this.route.snapshot.params['id']);
    this.selectedBook = this.dataService.getBookById(bookID);
  }

  setMostPopular(): void {
    this.dataService.setMostPopularBook(this.selectedBook);
    this.loggerService.log(`new most popular book: ${this.selectedBook.title}`)
  }

  saveChanges(): void {
    console.warn('Save changes to book not yet implemented.');
  }
}
