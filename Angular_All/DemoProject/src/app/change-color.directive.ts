import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  @Input()color:string; 

  @HostBinding('style.border') hostborder: string;
  constructor(private el:ElementRef,private render: Renderer2) { }

  ChangeBGcolor(color : string){
    this.render.setStyle(this.el.nativeElement,'color',color);
  }
  @HostListener('Click') foo(){
    alert("hello");
  }
  @HostListener('mouseenter') abc(){
    this.ChangeBGcolor(this.color);
    this.hostborder="5px solid green";
  }
  @HostListener('mouseleave') xyz(){
    this.ChangeBGcolor('black');
    this.hostborder="";
  }

}
