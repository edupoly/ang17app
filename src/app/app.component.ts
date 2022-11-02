import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  c=0;
  inc(){
    this.c++;
  }
  dec(){
    this.c--;
  }
  constructor(){
    console.log("app constructor called")
  }
  ngOnChages(){
    console.log("app ngOnChanges called")
  }
  ngOnInit(){
    console.log("app ngOnInit called")
    //http calls
    //service calls for initialisation
  }
  ngDoCheck(){
    console.log("app ngDoCheck Called")
  }
  ngContentInit(){
    console.log("app content init")
  }
  ngContentChecked(){
    console.log("app content checked")
  }
  ngAfterViewInit(){
    console.log("app after view init")
  }
  ngAfterViewChecked(){
    console.log("app after view Checked")
  }
}
