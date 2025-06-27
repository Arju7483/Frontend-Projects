import { Component } from '@angular/core';

@Component({
  selector: 'app-example2',
  standalone: true,
  imports: [],
  templateUrl: './example2.html',
  styleUrl: './example2.css'
})
export class Example2Component {
  fun(){
    alert("called");
  }
}
