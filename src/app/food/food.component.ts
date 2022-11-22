import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { retry,delay,take, debounceTime, map, filter,of, retryWhen, catchError, repeat } from 'rxjs';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(public http:HttpClient,public fs:FoodService) { 
  }
  foodItems:any;
  ngOnInit(): void {
    

    // this.http.get("http://localhost:3000/foodItems")
    // .pipe(
    //   map((restaurants:any)=>{
    //     console.log(restaurants)
    //     return restaurants.map((restaurant:any)=>{
    //       return {...restaurant,restaurant:restaurant.restaurant.toUpperCase()}
    //     })
    //   })
    // )
    // .subscribe((res)=>this.foodItems=res);
    
    // //example of filter
    // of(12,23,34,22,3,5,4,6).pipe(
    //   filter(a=>a%2===0)
    // ).subscribe(res=>console.log(res))

  }


}
