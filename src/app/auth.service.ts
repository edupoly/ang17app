import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userUrl = environment.userUrl
  constructor(public http:HttpClient,public router:Router) { 
    if(window.localStorage.getItem('username')){
      this.$isLoggedIn.next(true)
    }
  }
  $isLoggedIn = new BehaviorSubject(false);

  login({username,password}:any){
    return this.http.get(`${this.userUrl}?username=${username}&password=${password}`).pipe(
      map((res:any)=>{
        console.log(res)
        window.localStorage.setItem('username',res[0]['username'])
        window.localStorage.setItem('userId',res[0]['userId'])
        window.localStorage.setItem('role',res[0]['role'])
        this.$isLoggedIn.next(true)
        this.router.navigate(["/"])
        return res;
      })
    )
  }
  logout(){
    window.localStorage.clear();
    this.$isLoggedIn.next(false)
    this.router.navigate(['/login'])
  }
}
