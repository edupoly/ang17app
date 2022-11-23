import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems: any=[];

  constructor(public fs:FoodService,public authServ:AuthService) { }
  $isLoggedIn:boolean=false;
  ngOnInit(): void {
    this.fs.$cartItemsSubject.subscribe((cartItems)=>{
      this.cartItems=cartItems;
      console.log("cartItems::",cartItems)
    })
    this.authServ.$isLoggedIn.subscribe(status=>this.$isLoggedIn=status)
  }
  logout(){
    this.authServ.logout();
  }
}
