const crypto = require("node:crypto");

console.log("Hello world");

var a = 1078698;
var b = 20986;

crypto.pbkdf2Sync("Password","salt", 5000000, 50, "sha512");
console.log("First key is generated");

//Asynchronous Function
crypto.pbkdf2("Password","salt", 50000, 50, "sha512", (err,key)=> {
    console.log("Second Key is generated");
});

function multiplyFn(x, y){
    const result = a*b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ",c)