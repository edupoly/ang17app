import { Component } from '@angular/core';
import { ArthService } from './arth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public as:ArthService){}
  title = 'ang17app';
  x='';
  y='';
  res:any = 0;
  add(){
    this.res = this.as.addToNumbers(this.x,this.y)
  }
  sub(){
    this.res = this.as.substractNumbers(this.x,this.y)
  }
  mul(){
    this.res = this.as.mutiplyNumbers(this.x,this.y)
  }
  div(){
    this.res = this.as.devideNumbers(this.x,this.y)
  }
}
