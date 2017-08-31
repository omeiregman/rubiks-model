
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//Variables
number;
myNum = 0;
no_of_cubelets;
external_cubelets;
internal_cubelets;
derived_cube;
derived_rubix;
showVar: boolean = true;

//function to calcuate objectives of the project
calculateModel = function() {

  this.myNum = parseInt(this.number);
try {
  if(this.myNum<2) throw "Enter a number greater than 1";
  if(isNaN(this.myNum)) throw "Value given is not a number";

// executes mathematics models derived
  this.no_of_cubelets = Math.pow(this.myNum, 3);
  this.external_cubelets = (6 * Math.pow(this.myNum-1, 2)) + 2;
  this.internal_cubelets = Math.pow(this.myNum-2, 3);

//this iterates through n to find a subset of n
if (this.myNum<=3){
  this.derived_rubix = 0;
} else {
  for (var i = this.myNum-1; i>1; i--){
    this.derived_cube = Math.pow(i, 3);
      if (this.derived_cube === this.internal_cubelets){
        this.derived_rubix = i;
         break;
       }
     }
  }
}
catch(err){
  alert(err);
  this.number = "";
    }
  }
}
