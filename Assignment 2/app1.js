/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define*/

function findSum() {
    "use strict";                                    /* Function accepts the parameters in the arguments objext */
    var length = arguments.length;
    var i;
    var tmp = 0;                        // Declaring the variable in the function
    
    for (i = 0; i < length; i++) {
        tmp = tmp + arguments[i];                // logic to find the sum
    }
    
    return tmp;  //returning the sum
}

var sum = findSum(1, 2, 3); //caliing function
console.log(" The sume of the numbers is " + sum);
var sum1 = findSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  // calling function
console.log("The Sum of the numbers is " + sum1);
