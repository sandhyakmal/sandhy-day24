import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BaseHttpService {

  public baseURL: string = "https://dummyjson.com";

  constructor() { }

  public handleError(error: HttpErrorResponse){
    if(error.status === 0){
      //network error occurred // error request
      console.log('Error di Client',error.error);
    } else {
      //backend returned and response body
      console.log(`Error pada Backend ${error.status}`,error.error);
    }
    let message: string = 'something bad happend, please try again'
    return throwError(() => new Error(message));
  }
}
