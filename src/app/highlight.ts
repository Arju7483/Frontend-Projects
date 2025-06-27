import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Input } from '@angular/core';
import { Renderer2 } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class Highlight {


  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }


}
