import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
