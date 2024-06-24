import { Component } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  p:any

  constructor(public http:HttpClient){
    console.log("ghj")
       http.get(`http://localhost:480/tes/${89}`,{responseType:"text"}).subscribe((data:any)=>{
        console.log(data)
        this.p=data
       })
  }

  
}
