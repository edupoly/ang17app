import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { RestaurentsComponent } from './restaurents/restaurents.component';
import { RestaurentFoodItemsComponent } from './restaurent-food-items/restaurent-food-items.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    RestaurentsComponent,
    RestaurentFoodItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
