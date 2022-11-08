import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent implements OnInit {

  constructor(public ar:ActivatedRoute,public http:HttpClient) { }
  countryDetails:any;
  ngOnInit(): void {
    this.ar.params.subscribe((params)=>{
      this.http.get(`https://restcountries.com/v2/name/${params['name']}`)
      .subscribe((country:any)=>{
        this.countryDetails=country[0];
      })
    })
  }

}
