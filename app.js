require("./xyz.js");
const calculateSum = require("./sum.js");
 

var name = "Namaste NodeJs";

var a = 10;
var b = 20;

calculateSum(a,b);

console.log(globalThis===global);