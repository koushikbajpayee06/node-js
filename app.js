require("./xyz.js");
// const {calculateSum}= require("./calculate/sum.js");
// const {calculateMultiply} = require("./calculate/multiply.js");

const {calculateMultiply,calculateSum} = require('./calculate');
const data = require("./data.json");
console.log(JSON.stringify(data));
 

var name = "Namaste NodeJs";

var a = 10;
var b = 20;
var x = 20;

calculateSum(a,b);
calculateMultiply(a,b)

console.log(x);
console.log(z);

