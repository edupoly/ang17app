import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit(): void {
    this.getCourses();
  }
  courses:any;
  getCourses(){
    this.http.get("http://localhost:3000/courses").subscribe((courses)=>{
      this.courses=courses;
    })
  }
  deleteCourse(id:any){
    this.http.delete(`http://localhost:3000/courses/${id}`).subscribe((data)=>{
      console.log(data);
      alert("course deleted")
      this.getCourses();
    })
  }
  gotoEdit(id:any){
    this.router.navigate(['/editCourse',id])
  }
}
