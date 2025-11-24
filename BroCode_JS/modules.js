/*
    ES6 Modules = An external file that contains reusable code that
                  can be imported into other JS files
                  Can contain variables, classes, functions and more.
                  Introduced as part of EMCAScript 2015 Update
*/

import {PI, getCircumference, getArea, getVolume} from "./mathUtil.js";

console.log(PI);
console.log(`Circumference: ${getCircumference(9).toFixed(2)}cm^2`);
