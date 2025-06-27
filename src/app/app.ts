import { Component } from '@angular/core';
import { ExampleComponent } from './example/example';
import { Example2Component } from './example2/example2';
import {Admin} from './admin/admin';
import {SignalExample} from './signal-example/signal-example';
import {Controlflow} from './controlflow/controlflow';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from './highlight';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Highlight,RouterOutlet,RouterLink,ExampleComponent, Example2Component,Admin,SignalExample,Controlflow,CommonModule],
  templateUrl: './app.html', //sudu app.html er content show korbe. jodi onno page er show korte hoy ekhnae oi page er selector use korte hobe
  styleUrl: './app.css'
})
export class AppComponent {
  isActive : boolean = true;
  toggole(){
   this.isActive = !this.isActive;
  }
}