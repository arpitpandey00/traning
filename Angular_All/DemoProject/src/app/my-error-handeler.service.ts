import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyErrorHandelerService implements ErrorHandler{
  

  constructor() { }
  handleError(error: any){
    console.log('I Will Log This Error.');
    throw error;
  }
}
