import { allReaders, allBooks } from '../data';
import { Reader } from 'app/models/reader';
import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { Book } from 'app/models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  mostPopularBook:Book=allBooks[0];

  constructor(private loggerService:LoggerService,private http:HttpClient) {}

  //ASYNCHRONOUS
  getAllReaders():Observable<Reader[]>{
    return this.http.get<Reader[]>('/api/readers');
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
