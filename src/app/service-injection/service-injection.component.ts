import { Component, DoCheck, OnInit } from '@angular/core';
import { InputComponent } from "../data-inject/input/input.component";
import { LoadComponent } from "../data-inject/load/load.component";
import { SignalComponent } from "../data-inject/signal/signal.component";
import { DataService } from '../data-inject/data-service';

@Component({
    selector: 'app-service-injection',
    standalone: true,
    templateUrl: './service-injection.component.html',
    imports: [InputComponent, LoadComponent, SignalComponent]
})

export class ServiceInjectionComponent implements DoCheck {

    data = '';
    childData!: string;

    constructor(private dataService: DataService) {}

    ngOnInit() {

    }

    ngDoCheck(): void {
        this.data = this.dataService.getData();

    }

    recievdata(data: string) {
        return this.childData = data;
    }
    

}
