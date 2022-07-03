import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[edurekaUnderline]'
})
export class UnderlineDirective implements AfterViewInit, OnInit{

  constructor(private el : ElementRef) { 
    
  }

  ngOnInit(): void {
    const element = this.el.nativeElement
    console.log(element.innerText)
  } 

  ngAfterViewInit(): void {
    const element = this.el.nativeElement
      if(element.innerText.length > 10)
        {
          element.style.textDecoration = "underline";
        }
  }

}
