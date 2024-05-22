import { Component } from '@angular/core';
import { routerModule } from '../module/router.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [routerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Nachbearbeitungs App';
}
