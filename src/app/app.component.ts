import { Component } from '@angular/core';
import { routerModule } from '../module/router.module';
import { ServiceInjectionComponent } from "./service-injection/service-injection.component";
import { DataInjectSignalComponent } from "./data-inject-signal/data-inject-signal.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [routerModule, ServiceInjectionComponent, DataInjectSignalComponent]
})
export class AppComponent {
  title = 'Nachbearbeitungs App';
  activateDataInjection = false;
  activateDataInjectionSignal = false;
}
