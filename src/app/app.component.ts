import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//volume;
number;
calculateModel = function() {
  var myNum = parseInt(this.number);
  var no_of_cubelets = Math.pow(myNum, 3);
  var total_cubelets = (6 * Math.pow(myNum-1, 2)) + 2;
  var hidden_cubelets = Math.pow(myNum-2, 3);
  
  console.log(no_of_cubelets);
  console.log(total_cubelets);
  console.log(hidden_cubelets);
}
}
