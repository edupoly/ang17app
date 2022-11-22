import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-restaurents',
  templateUrl: './restaurents.component.html',
  styleUrls: ['./restaurents.component.css']
})
export class RestaurentsComponent implements OnInit {

  constructor(public http:HttpClient,public fs:FoodService,public router:Router) { }
  restaurents:any;
  ngOnInit(): void {
    this.fs.getRestaurants().subscribe((res)=>this.restaurents=res);
  }
  showFoodItems(foodItems:any[]){
    var items = JSON.stringify(foodItems)
    this.router.navigate(["/foodItems"],{queryParams:{items}})
  }
}
