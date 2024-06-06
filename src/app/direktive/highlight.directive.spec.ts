import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  let elementRef: ElementRef;

  beforeEach(() => {
    const MockElemtRef = document.createElement('div');
    elementRef = new ElementRef(MockElemtRef);
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(elementRef);
    expect(directive).toBeTruthy();
  });

  it('should highlight the element on mouse enter', () => {
    const directive = new HighlightDirective(elementRef);
    directive.appHighlight = 'red';
    directive.onMouseEnter();
    expect(elementRef.nativeElement.style.backgroundColor).toBe('red');
    expect(elementRef.nativeElement.style.color).toBe('black');
  });

  it('should remove highlight from the element on mouse leave', () => {
    const directive = new HighlightDirective(elementRef);
    directive.onMouseLeave();
    expect(elementRef.nativeElement.style.backgroundColor).toBe('');
    expect(elementRef.nativeElement.style.color).toBe('');
  });
});
