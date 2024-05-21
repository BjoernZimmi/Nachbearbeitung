import { Component } from '@angular/core';
import { routerModule } from '../../module/router.module';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [routerModule],
  templateUrl: './first.component.html'
})
export class FirstComponent {

}
