import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  constructor(public http:HttpClient,public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe((p)=>{
      this.getCourseDetailsById(p['id'])
    })
  }
  getCourseDetailsById(id:any){
    this.http.get(`http://localhost:3000/courses/${id}`).subscribe((course:any)=>{
      // this.courseForm.get('title')?.setValue(course['title'])
      // this.courseForm.get('price')?.setValue(course['price'])
      // this.courseForm.get('trainer')?.setValue(course['trainer'])
      this.courseForm.setValue(course)
    })
  }
  courseForm = new FormGroup({
    title:new FormControl('',[Validators.required,Validators.minLength(3)],[this.isCourseUnique.bind(this)]),
    price:new FormControl('',[Validators.required,this.isNumberValidation]),
    trainer:new FormControl(),
    id:new FormControl()
  })
  isCourseUnique(fc:any):Promise<any>{
    var p = new Promise((resolve,reject)=>{
      this.http.get(`http://localhost:3000/courses?title=${fc.value}`).subscribe((data:any)=>{
        if(data['length']!==0){
          resolve({courseExistError:'course already exist'})
        }
        else{
          resolve(null)
        }
      })
    })
    return p
  }
  isNumberValidation(fc:FormControl){
    console.log("isNumber called",fc.errors)
    if(isNaN(fc.value)){
      return {notNumberError:'given value is not a number'}
    }
    else{
      return null
    }
  }
  updateCourse(){
    var id = this.courseForm.value.id;
    this.http.put(`http://localhost:3000/courses/${id}`,this.courseForm.value)
    .subscribe((res)=>{alert("Course Updated Success")})
  }
}
