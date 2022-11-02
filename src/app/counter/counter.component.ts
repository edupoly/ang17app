import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count=0;

  dec(){
    this.count--;
  }
  inc(){
    this.count++;
  }
  ngDoCheck(){
    console.log("counter ngDoCheck called")
  }
  ngAfterContentInit(){
    console.log("content initialised");
  }
  ngAfterContentChecked(){
    console.log("content checked")
  }
  ngAfterViewInit(){
    console.log("counter after view init")
  }
  ngAfterViewChecked(){
    console.log("counter after view Checked")
  }
}
