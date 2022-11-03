import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang17app';
  countries:any=[]
  constructor(public http:HttpClient){
    this.http.get("https://restcountries.com/v2/all")
    .subscribe((res)=>{
      this.countries=res;
    })
  }
}
