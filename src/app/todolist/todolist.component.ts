import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tasks:any[]=[];
  newTaskTitle = '';
  addTask(){
    var newTask = {
      title:this.newTaskTitle,
      status:false
    }
    this.tasks.push(newTask)
    console.log(this.tasks)
  }
  toggleStatus(index:number){
    this.tasks[index].status=!this.tasks[index].status
  }
}
