import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data-service';

@Component({
  selector: 'app-load',
  standalone: true,
  imports: [],
  templateUrl: './load.component.html',
  styles: ``
})
export class LoadComponent implements OnInit, DoCheck {

  @Output() dataEmitter = new EventEmitter<string>();

  getDataFromService: string = '';

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.getDataFromService = this.dataService.getData();

  }

  sendData() {
    this.dataEmitter.emit(this.dataService.getData());
  }

}
