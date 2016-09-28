/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define*/

function counterVal() {
    
    "use strict";
    var counter = 1;
    return function count() {
        
        counter++;
        console.log("Please call" + "Call fun()" + "The incremented value on the call " + counter);
    }
    
}

var callFun = counterVal();
callFun();
