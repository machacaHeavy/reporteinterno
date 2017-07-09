import { Directive, HostListener, ElementRef } from '@angular/core';


@Directive({
  selector: '[gs-uppercase]'
})
export class UpperCaseDirective{

    constructor(private el: ElementRef){}

    @HostListener('input', ['$event']) oninput(event){
          this.el.nativeElement.value = event.target.value.toUpperCase();
    }
}