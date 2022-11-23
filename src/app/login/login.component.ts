import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public as:AuthService) { }
  loginForm:FormGroup=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  });
  ngOnInit(): void {
  }
  gotologin(){
    this.as.login(this.loginForm.value).subscribe((res)=>{console.log(res)})
  }

}
