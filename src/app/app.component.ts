import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

number;
myNum = 0;
no_of_cubelets;
external_cubelets;
internal_cubelets;
derived_cube;
derived_rubix;
showVar: boolean = true;
calculateModel = function() {

  this.myNum = parseInt(this.number);
  this.no_of_cubelets = Math.pow(this.myNum, 3);
  this.external_cubelets = (6 * Math.pow(this.myNum-1, 2)) + 2;
  this.internal_cubelets = Math.pow(this.myNum-2, 3);

  for (var i = this.myNum-1; i>1; i--){
    this.derived_cube = Math.pow(i, 3);
      if (this.derived_cube === this.internal_cubelets){
        this.derived_rubix = i;
        break;
      }

    this.showVar = !this.showVar;
  }

  // console.log("total number of cubelets in "+ this.myNum + " = " + this.no_of_cubelets);
  // console.log("visible cube in "+ this.myNum + " = " + this.external_cubelets);
  // console.log("hidden cube in "+ this.myNum + " = " + this.internal_cubelets);
}

}
