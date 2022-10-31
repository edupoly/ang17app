import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang17app';
  constructor(){
    console.log("App constructor called")
  }
  ngOnChanges(){
    console.log("App ngOnChanges called")
  }
  ngOnInit(){
    console.log("App ngOnInit called")
  }
  ngDoCheck(){
    console.log("App ngDoCheck called")
  }

  ngAfterContentInit(){
    console.log("App ngAfterContentInit called")
  }
}
