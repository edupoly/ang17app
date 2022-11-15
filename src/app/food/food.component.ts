import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { retry,delay,take, debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(public http:HttpClient) { }
  foodItems:any;
  ngOnInit(): void {
    this.http.get("http://localhost:3000/foodItems")
    .pipe(

      map((restaurants:any)=>{
        console.log(restaurants)
        return restaurants.map((restaurant:any)=>{
          return {...restaurant,restaurant:restaurant.restaurant.toUpperCase()}
        })
      })
    )
    .subscribe((res)=>this.foodItems=res)
  }

}
