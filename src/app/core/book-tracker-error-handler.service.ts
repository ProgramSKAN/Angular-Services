import { BookTrackerError } from './../models/bookTrackerError';
import { Injectable ,ErrorHandler} from '@angular/core';

@Injectable()
export class BookTrackerErrorHandlerService implements ErrorHandler{

  constructor() { }
  handleError(error: any): void {
    let customError:BookTrackerError=new BookTrackerError();
    customError.errorNumber=200;
    customError.message=(<Error>error).message;
    customError.friendlyMessage='An error occurred.plese try again';;

    console.log(customError);
  }
}
