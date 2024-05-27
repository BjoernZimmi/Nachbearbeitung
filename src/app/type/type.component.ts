import { Component } from '@angular/core';
import { fruitScientificNames } from './typeTest'

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [],
  templateUrl: './type.component.html',
  styles: ``
})
export class TypeComponent {

  test2 = fruitScientificNames;
  



  ngOnInit() {
    console.log(this.test2.Apple);
    console.log(this.test2.Cherry);
    
    
  }



}
