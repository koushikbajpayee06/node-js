require("./xyz.js");
const obj= require("./sum.js");
 

var name = "Namaste NodeJs";

var a = 10;
var b = 20;

obj.calculateSum(a,b);
console.log(obj.x);

console.log(globalThis===global);