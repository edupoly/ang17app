import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
