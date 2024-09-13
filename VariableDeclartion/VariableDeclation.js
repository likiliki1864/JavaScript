//VariableDeclations

//-> var:-
var x = 10;
console.log(x); // 10

if (true) {
var x = 20; // Same variable, function-scoped
console.log(x); // 20
}
console.log(x); // 20

//-> let:-
let y = 30;
console.log(y); // 30

if (true) {
let y = 40; // Different variable, block-scoped
console.log(y); // 40
}
console.log(y); // 30

//-> const:-
const z = 50;
console.log(z); // 50

if (true) {
const z = 60; // Different variable, block-scoped
console.log(z); // 60
}
console.log(z); // 50