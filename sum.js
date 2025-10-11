
//Modules protects their variables and functions from leaking

console.log("Sum Module executed");

z = "Hello World";

var x = "Namaste World";

function calculateSum(a,b){
    const sum = a+b;
    console.log(sum);
}

module.exports ={
    x,
    calculateSum,
};


