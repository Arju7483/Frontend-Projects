import { Component } from '@angular/core';

@Component({
  selector: 'app-controlflow',
  imports: [],
  templateUrl: './controlflow.html',
  styleUrl: './controlflow.css'
})
export class Controlflow {
  x : number = 4;
  isVisible : boolean = true;
  show(){
    this.isVisible = true;
  }
  hide(){
    this.isVisible = false;
  }
  list = ["jan","feb"];
}
