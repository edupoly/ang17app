import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries2',
  templateUrl: './countries2.component.html',
  styleUrls: ['./countries2.component.css']
})
export class Countries2Component implements OnInit {

  constructor(public http:HttpClient) { }
  countries:any;
  ngOnInit(): void {
    this.http.get("https://restcountries.com/v2/all").subscribe((countries)=>{
      this.countries=countries;
    })
  }

}
