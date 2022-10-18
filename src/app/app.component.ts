import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clr='';
  tasks=['clean washing machine','repair mobile','hire hr','search good place'];
  technologies=['html','css','js','nodejs','reactjs','angular','express','bootstrap']
  selectedTechs:any=[];
  gender=null;
  newtask='';
  addTask(){
    this.tasks.push(this.newtask);
  }
  xyz(e:any){
    if(e.target.checked){
      this.selectedTechs.push(e.target.value)
    }
    else{
      var i = this.selectedTechs.indexOf(e.target.value);
      this.selectedTechs.splice(i,1)
    }

  }
}
