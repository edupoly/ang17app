import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.getCourses();
  }
  courses:any;
  getCourses(){
    this.http.get("http://localhost:3000/courses").subscribe((courses)=>{
      this.courses=courses;
    })
  }
}
