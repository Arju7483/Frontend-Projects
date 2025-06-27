import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-signal-example',
  imports: [],
  templateUrl: './signal-example.html',
  styleUrl: './signal-example.css'
})
export class SignalExample {
  count = signal(1);
  name = signal<string>("");
  id = signal<number>(4);
  increment(){
    this.count.update(c => c * 3);
  }
}
