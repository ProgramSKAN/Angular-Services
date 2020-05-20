import { BookTrackerError } from './../models/bookTrackerError';
import { DataService } from '../core/data.service';
import { LoggerService } from '../core/logger.service';
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
    this.dataService.getAllReaders().subscribe(
      (data:Reader[])=>this.allReaders=data,
      (err:BookTrackerError)=>console.log(err.friendlyMessage),
      ()=>this.loggerService.log('Completed getting the readers')
    );
    this.mostPopularBook=this.dataService.mostPopularBook;


    // this.dataService.getAuthorRecommendation(1)
    //   .then(
    //     (author:string)=>{
    //       this.loggerService.log(author);//data
    //       //throw new Error('problem in the success handler');
    //     },
    //     (err:string)=>this.loggerService.error(`the promise was rejected: ${err}`)//reason
    //   ).catch(
    //     (error:Error)=>this.loggerService.error(error.message))
    //above or
    //this.getAuthorRecommendationAsync(1);
    //or
    this.getAuthorRecommendationAsync(1)
      .catch(err=>this.loggerService.error(err));

    this.loggerService.log('done with dashboard initialization');//this appears before 'Completed getting the readers' due to async
  }

  //await can be used in any promise.if it resolves the it proceed to next line.if rejects then proceeds in catch block
  private async getAuthorRecommendationAsync(readerID:number):Promise<void>{
    // try{
      let author:string=await this.dataService.getAuthorRecommendation(readerID);
      this.loggerService.log(author);
      //throw new Error('problem in the success handler');
    // }
    // catch(error){
    //   this.loggerService.error(error);
    // }
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
