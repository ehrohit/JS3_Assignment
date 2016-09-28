
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define*/

/* Passing a function as an argument */

function outerFunction(innerFunction) {     "use strict"; //To Follow the JS Syntax properly
        innerFunction(); //Calling innerFunction()
    }

var arg = function () { "use strict"; console.log("Hello World from the InnerFunction"); } //Declaring a funnction variable to be passed as an argument
outerFunction(arg); //Calling outerFunction by passing the arg function 