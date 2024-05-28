import { Component } from '@angular/core';
import { InputComponent } from "../data-inject/input/input.component";

@Component({
    selector: 'app-service-injection',
    standalone: true,
    templateUrl: './service-injection.component.html',
    imports: [InputComponent]
})

export class ServiceInjectionComponent {

}
