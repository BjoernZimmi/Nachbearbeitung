import { Component } from '@angular/core';
import { routerModule } from '../../module/router.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [routerModule],
  templateUrl: './second.component.html',
  styles: ``
})
export class SecondComponent {

constructor(private router: Router) {


}

  queryParamsInTypeScript() {
    this.router.navigate(['/query'], {queryParams: {id: 3, sort: 'none'}})
  }

}
