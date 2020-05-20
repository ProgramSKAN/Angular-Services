import { BookTrackerError } from './../models/bookTrackerError';
import { allReaders, allBooks } from '../data';
import { Reader } from 'app/models/reader';
import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { Book } from 'app/models/book';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";


@Injectable()
export class DataService {

  mostPopularBook:Book=allBooks[0];

  constructor(private loggerService:LoggerService,private http:HttpClient) {}

  //ASYNCHRONOUS
  getAllReaders():Observable<Reader[] | BookTrackerError>{
    return this.http.get<Reader[]>('/api/errors/500')//'/api/readers'
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error:HttpErrorResponse):Observable<BookTrackerError>{
    let dataEror=new BookTrackerError();
    dataEror.errorNumber=100;
    dataEror.message=error.message;
    dataEror.friendlyMessage='An error occurred retrieving data';
    return throwError(dataEror);
  }

  getReaderById(id:number):Reader{
    return allReaders.find(reader=>reader.readerID===id);
  }

  getAllBooks():Book[]{
    return allBooks;
  }

  getBookById(id:number):Book{
    return allBooks.find(book=>book.bookID===id);
  }

  setMostPopularBook(popularBook:Book):void{
    this.mostPopularBook=popularBook;
  }

  //SYNCHRONOUS
  // getAllReaders():Reader[]{
  //   return allReaders;
  // }

}
