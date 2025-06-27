import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.html',  // Changed to external template
  styleUrl: './example.css'  // Optional: external styles
})
export class ExampleComponent { 
  title = 'Name Counter App';
  count = 0;
  x = 20;
  y = 10;
  increment() { 
    this.count++; 
  }
}