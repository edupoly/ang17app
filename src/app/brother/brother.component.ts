import { Component, OnInit } from '@angular/core';
import { CouterService } from '../couter.service';

@Component({
  selector: 'app-brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.css']
})
export class BrotherComponent implements OnInit {

  constructor(public cS:CouterService) { }

  ngOnInit(): void {
  }
  inc(){
    this.cS.increment()
  }
  dec(){
    this.cS.decrement()
  }
}
