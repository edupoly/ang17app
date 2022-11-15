import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, Form } from '@angular/forms';

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
    title:new FormControl('',[Validators.required,Validators.minLength(3)],[this.isCourseUnique.bind(this)]),
    price:new FormControl('',[Validators.required,this.isNumberValidation]),
    trainer:new FormControl()
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
  addCourse(){
    console.log(this.courseForm)
    if(this.courseForm.status==='VALID'){
      this.http.post("http://localhost:3000/courses",this.courseForm.value)
      .subscribe((res)=>{alert("course added")})
    }
    
  }
}
