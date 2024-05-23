import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow', 'black');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', '');
  }

  private highlight(color: string, colorTwo: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = colorTwo;
  }
}
