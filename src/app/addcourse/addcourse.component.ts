import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }
  courseForm = new FormGroup({
    title:new FormControl('',[Validators.required,Validators.minLength(3)]),
    price:new FormControl('',[Validators.required]),
    trainer:new FormControl()
  })
  addCourse(){
    console.log(this.courseForm)
    if(this.courseForm.status==='VALID'){
      this.http.post("http://localhost:3000/courses",this.courseForm.value)
      .subscribe((res)=>{alert("course added")})
    }
    
  }
}
