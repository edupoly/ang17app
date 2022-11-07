import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(public http:HttpClient) { }
  countries:any;
  ngOnInit(): void {
    this.http.get("https://restcountries.com/v2/all").subscribe((countries)=>{
      this.countries=countries;
    })
  }

}
