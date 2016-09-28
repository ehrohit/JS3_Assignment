/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define*/



var pi = 3.14;  /*Decalring the Variables  */
var radius = 7;

function calcArea(radius) {
    "use strict";
    var circleArea = pi * radius * radius;
    return circleArea;  //return area of the circle
}

var area = calcArea(radius); // Calling function
console.log(" The area of the Circle is " + Math.round(area)); //Printing the area on the console