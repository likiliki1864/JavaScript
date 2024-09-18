//Hoisting

console.log(hoistedVar); // Outputs: undefined
var hoistedVar = 3;

console.log(hoistedFunction()); // Outputs: "Hello!"
function hoistedFunction() {
    return "Hello!";
}

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 3;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 5;
