import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }
  tasks=['book new car','vacation plan','goto taj'];
  newtask='';
  ngOnInit(): void {
  }
  addTask(){
    this.tasks.push(this.newtask)
  }
}
