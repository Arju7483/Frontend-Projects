import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.html',
  styleUrl: './api.css'
})
export class Api implements OnInit{
  http = inject(HttpClient);
  userList: any[] = [];
  ngOnInit(): void {
    this.getDataFromApi();
  }
  getDataFromApi(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((dataVariable:any) => {
      this.userList = dataVariable;
      console.log(dataVariable);
    })
  }
}
