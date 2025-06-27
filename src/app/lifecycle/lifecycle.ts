import { Component, SimpleChanges } from '@angular/core';
import { OnInit,OnDestroy,OnChanges } from '@angular/core';
@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css'
})
export class Lifecycle implements OnInit,OnDestroy,OnChanges {
  constructor(){
    console.log("construstor is called");
  }
  ngOnInit(): void {
    console.log("onInit is called");//used for api call
  }
  ngOnDestroy(): void {
    console.log("Ondestroy is called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges");
  }
}
