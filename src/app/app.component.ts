
import { Component } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang17app';
  countries:any=[]
  constructor(public cS:CountriesService){
    // this.cS.getCountries()
    // .then((res)=>{
    //   this.countries=res
    // })
    
    this.cS.getCountries()
    .subscribe((res)=>{
      this.countries=res;
    })

  }
}
