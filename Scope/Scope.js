//Scope:-

//Global Scope:
var globalVar = 'global';
function example() {
console.log(globalVar); // 'global'
}
example();

//Function Scope:
function example() {
var localVar = 'function scope';
console.log(localVar); // 'function scope'
}
console.log(localVar); // ReferenceError: localVar is not defined

//Block Scope:
if (true) {
let blockVar = 'block scope';
console.log(blockV/ar); // 'block scope'
}
console.log(blockVar); // ReferenceError: blockVar is not defined