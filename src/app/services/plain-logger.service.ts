import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PlainLoggerService implements LoggerService{

  constructor() { }

  log(message: string): void {
    console.log(`plain log: ${message}`)
  }
  error(message: string): void {
    console.log(`plain log  error: ${message}`)
  }
}
