import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from '../data-service';

@Component({
  selector: 'app-load',
  standalone: true,
  imports: [],
  templateUrl: './load.component.html',
  styles: ``
})
export class LoadComponent implements OnInit, DoCheck {

  getDataFromService: string = '';

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.getDataFromService = this.dataService.getData();

  }

}
