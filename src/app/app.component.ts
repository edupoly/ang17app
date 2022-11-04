import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang17app';
  books:any=[]
  newbook={
    title:'',
    author:'',
    id:''
  }
  editflag=false;
  getBooks(){
    this.http.get("http://localhost:3000/books")
    .subscribe((res)=>{
      this.books=res;
      console.log(this.books)
    })
  }
  addBook(){
    this.http.post("http://localhost:3000/books",this.newbook)
    .subscribe((data)=>{
      this.getBooks()
    })
  }
  editBook(book:any){
    this.editflag=true;
    this.newbook=book;
  }
  updateBook(){
    this.http.put(`http://localhost:3000/books/${this.newbook.id}`,this.newbook)
    .subscribe((data)=>{
      this.editflag=false;
      this.newbook={
        title:'',
        author:'',
        id:''
      }
      this.getBooks()
    })
  }
  deleteBook(id:any){
    this.http.delete(`http://localhost:3000/books/${id}`).subscribe((data)=>{console.log(data)})
  }
  constructor(public http:HttpClient){
    this.getBooks();
  }
}
