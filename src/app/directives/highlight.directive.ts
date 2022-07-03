import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[edurekaHighlight]'
})
export class HighlightDirective {

  constructor(private el : ElementRef) { 
      console.log(el, "HighlightDirective")
      // el.nativeElement.style.backgroundColor = "yellow"
  }

  @HostListener("mouseover") mouseover(){
    this.el.nativeElement.style.backgroundColor = "yellow"
  }

  @HostListener("mouseout") mouseout(){
    this.el.nativeElement.style.backgroundColor = ""
  }

}
