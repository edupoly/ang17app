import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  countriesUrl='https://restcountries.com/v2/all';
  constructor(public http:HttpClient) { }
  getCountries(){
    // return fetch(this.countriesUrl).then(res=>res.json())

    return this.http.get(this.countriesUrl).pipe(
      map((countries)=>{
        return countries
      })
    )
  }
}
