import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin',
  standalone: true, 
  imports: [FormsModule,CommonModule], 
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  imgurl: string = "C:\Users\mahbub.arju\html and css files\flower.jpg";
  mlen: number = 10;
  username:string = '';
  previousUsername: string = '';
  nameChanged: boolean = false;
  fun(){
    alert("clicked");
  }
   // Track changes
  onNameChange() {
    this.nameChanged = this.username !== this.previousUsername;
  }

  // Initialize previous value
  ngOnInit() {
    this.previousUsername = this.username;
  }
  isActive: boolean = true;
  toggole(){
    this.isActive = !this.isActive;
  }

}
