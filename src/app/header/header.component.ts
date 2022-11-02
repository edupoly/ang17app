import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("header ngOnInit called")
  }
  
  @Input() abcd:any;
  
  ngOnChanges(){
    console.log("header ngOnChanges called")
  }
  ngAfterViewInit(){
    console.log("header after view init")
  }
  ngAfterViewChecked(){
    console.log("header after view Checked")
  }
}
