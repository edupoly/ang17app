import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfoodComponent } from './addfood/addfood.component';
import { CartComponent } from './cart/cart.component';
import { FoodGuard } from './food.guard';
import { LoginComponent } from './login/login.component';
import { RestaurentFoodItemsComponent } from './restaurent-food-items/restaurent-food-items.component';
import { RestaurentsComponent } from './restaurents/restaurents.component';

const routes: Routes = [
  {
    path:'',
    component:RestaurentsComponent
  },
  {
    path:'foodItems',
    component:RestaurentFoodItemsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'addFoodItem',
    component:AddfoodComponent,
    canActivate:[FoodGuard]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
