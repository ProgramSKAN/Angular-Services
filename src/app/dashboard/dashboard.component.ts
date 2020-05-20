import { DataService } from './../services/data.service';
import { LoggerService } from './../services/logger.service';
import { Component, OnInit } from '@angular/core';

import { Book } from "app/models/book";
import { allBooks, allReaders } from 'app/data';
import { Reader } from "app/models/reader";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private loggerService:LoggerService,private dataService:DataService) {
    this.loggerService.log('printing from dashboard');
   }

  ngOnInit() {
    this.allBooks= this.dataService.getAllBooks();
    this.allReaders=this.dataService.getAllReaders();
    this.mostPopularBook=this.allBooks[0];
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
