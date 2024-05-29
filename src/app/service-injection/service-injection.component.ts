import { Component } from '@angular/core';
import { InputComponent } from "../data-inject/input/input.component";
import { LoadComponent } from "../data-inject/load/load.component";
import { SignalComponent } from "../data-inject/signal/signal.component";

@Component({
    selector: 'app-service-injection',
    standalone: true,
    templateUrl: './service-injection.component.html',
    imports: [InputComponent, LoadComponent, SignalComponent]
})

export class ServiceInjectionComponent {

}
