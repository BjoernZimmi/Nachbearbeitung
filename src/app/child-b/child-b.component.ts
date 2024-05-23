import { Component } from '@angular/core';
import { HighlightDirective } from '../direktive/highlight.directive';

@Component({
  selector: 'app-child-b',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './child-b.component.html'
})

export class ChildBComponent {

  isHighlightActive: boolean = false;
  color = '';

}
