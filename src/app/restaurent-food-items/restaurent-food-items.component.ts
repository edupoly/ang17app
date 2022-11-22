import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurent-food-items',
  templateUrl: './restaurent-food-items.component.html',
  styleUrls: ['./restaurent-food-items.component.css']
})
export class RestaurentFoodItemsComponent implements OnInit {

  constructor(public ar:ActivatedRoute) { }
  menu:any[]=[]
  ngOnInit(): void {
    this.ar.queryParams.subscribe((foodItems)=>{
      this.menu=JSON.parse(foodItems['items']);
    })
  }

}
