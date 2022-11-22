import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, retryWhen, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(public http:HttpClient) { }

  getRestaurants(){
    return  this.http.get("http://localhost:3000/foodItems")
  }
}
