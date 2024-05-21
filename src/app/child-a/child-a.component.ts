import { Component } from '@angular/core';
import { routerModule } from '../../module/router.module';

@Component({
  selector: 'app-child-a',
  standalone: true,
  imports: [routerModule],
  templateUrl: './child-a.component.html'
})
export class ChildAComponent {
  
}
