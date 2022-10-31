import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang17app';
  coursecost=40000;
  startDate=new Date('12-1-2022')
  heights=[19,20,18,34,10,28,44,15];
  key='age';
  students = [
    {
      firstname:'suma',
      lastname:'kanakala',
      age:35
    },
    {
      firstname:'priya',
      lastname:'katta',
      age:20
    },
    {
      firstname:'praveen',
      lastname:'gubbala',
      age:39
    },
    {
      firstname:'raveena',
      lastname:'appu',
      age:30
    }
  ]
  updateKey(k:any){
    this.key=k
  }
}
