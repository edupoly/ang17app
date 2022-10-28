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

  tasks:any[]=[
    {
      title:'praveen',
      status:true
    },
    {
      title:'rahul',
      status:false
    },
    {
      title:'kiran',
      status:false
    },
    {
      title:'stuthi',
      status:false
    },
    {
      title:'hima',
      status:true
    },
  ];
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

  deleteTask(i:any){
    this.tasks.splice(i,1)
  }

}
