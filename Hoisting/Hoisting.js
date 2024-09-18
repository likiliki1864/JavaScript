//Hoisting

console.log(hoistedVar); // Outputs: undefined
var hoistedVar = 3;

console.log(hoistedFunction()); // Outputs: "Hello!"
function hoistedFunction() {
    return "Hello!";
}