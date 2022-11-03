import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArthService {

  constructor() { }

  addToNumbers(a:any,b:any){
    var x;
    x = Number(a)+Number(b);
    if(isNaN(x)){
      return "enter valid input"
    }
    else{
      return x
    }
  }
  substractNumbers(a:any,b:any){
    var x;
    x = Number(a)-Number(b);
    if(isNaN(x)){
      return "enter valid input"
    }
    else{
      return x
    }
  }
  mutiplyNumbers(a:any,b:any){
    var x;
    x = Number(a)*Number(b);
    if(isNaN(x)){
      return "enter valid input"
    }
    else{
      return x
    }
  }
  devideNumbers(a:any,b:any){
    if(b==0){
      return 'Please enter a valid denominator'
    }
    else{
      var x;
      x = Number(a)/Number(b);
      if(isNaN(x)){
        return "enter valid input"
      }
      else{
        return x
      }
    }
    
  }
}
