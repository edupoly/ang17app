import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(){
    console.log("Task constructor called")
  }

  ngOnInit(){
    console.log("Task ngOnInit called")
  }

  ngOnChanges(){
    console.log("Task ngOnChanges called")
  }

  ngDoCheck(){
    console.log("Task ngDoCheck called")
  }
  ngAfterContentInit(){
    console.log("Task content init")
  }
  ngAfterContentChecked(){
    console.log("Task content checked")
  }
  @Input() task:any;
  @Input() ind:any;

  @Output() delTask = new EventEmitter();
  @Output() toggleTaskStatus=new EventEmitter()

  emitDelTaskEvent(){
    this.delTask.emit(this.ind);
  }
  emitToggleTaskStatus(){
    this.toggleTaskStatus.emit(this.ind)
  }
}
