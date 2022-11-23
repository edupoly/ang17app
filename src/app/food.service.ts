import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, retryWhen, Subject, take, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(public http:HttpClient) { }
  cartItems:any[]=[
    {
        "foodName": "Spicy Deluxe Chicken Sandwich",
        "calories": 570,
        "count": 2
    },
    {
        "foodName": "Spicy Chicken",
        "foodType": "Chicken",
        "calories": 490,
        "count": 3
    }
];
  $cartItemsSubject = new BehaviorSubject(this.cartItems);
  getRestaurants(){
    return  this.http.get("http://localhost:3000/foodItems")
  }
  addToCart(item:any){
    item['count']=1;
    this.cartItems.push(item);
    this.$cartItemsSubject.next(this.cartItems)
  }
  getCartItems(){
    return this.cartItems
  }
  incCartItemCount(i:any){
    this.cartItems[i].count++;
    this.$cartItemsSubject.next(this.cartItems)
  }
  decCartItemCount(i:any){
    if(this.cartItems[i].count===1){
      this.cartItems.splice(i,1)
    }
    else{
      this.cartItems[i].count--;
      this.$cartItemsSubject.next(this.cartItems)
    }
  }
}
