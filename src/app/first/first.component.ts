import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() x='';

  @Output() xyz = new EventEmitter();

  callABC(){
    this.xyz.emit("Welcome to Output event");
  }
}
