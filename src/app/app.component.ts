import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang17app';
  firstname='praveen';
  countries = ['india','nepal','namibia','hongkong','malasia','combodia','bankok']
  addCountry(){
    alert("HI")
  }
}

// databinding
// webpage
// // structure //html
// // presentation//css
// // logic // js
// // data  // fetched from server// js
