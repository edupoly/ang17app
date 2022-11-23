import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public fs:FoodService) { }
  cartItems:any[]=[]
  ngOnInit(): void {
    this.cartItems=this.fs.getCartItems()
    this.fs.$cartItemsSubject.subscribe(items=>this.cartItems=items)
  }
  incItemCount(index:any){
    this.fs.incCartItemCount(index)
  }
  decItemCount(index:any){
    this.fs.decCartItemCount(index)
  }
}
