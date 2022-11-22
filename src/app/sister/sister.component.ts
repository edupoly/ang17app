import { Component, OnInit } from '@angular/core';
import { CouterService } from '../couter.service';

@Component({
  selector: 'app-sister',
  templateUrl: './sister.component.html',
  styleUrls: ['./sister.component.css']
})
export class SisterComponent implements OnInit {

  constructor(public cs:CouterService) { }
  action:any;
  ngOnInit(): void {
    this.cs.counterSubject.subscribe((x)=>{
      this.action=x;
    })
  }

}
