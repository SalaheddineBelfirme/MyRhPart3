import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.classList.add('bg-primary', 'text-white', 'p-2', 'rounded');
  }

}
