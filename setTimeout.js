console.log("Hello World");

var a = 1078698;
var b = 20986;

setTimeout(()=>{
    console.log("call me Asap")
},0);

setTimeout(()=>{
    console.log("call me after 3s")
},3000);

function multiplyFn(x, y){
    const result = a*b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ",c);