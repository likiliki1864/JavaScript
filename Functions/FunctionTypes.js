//Functions:-

//Regular Functions: 

function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5


//Anonymous Functions:

const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(2, 3)); // Output: 6

//Arrow Functions:

const greet = name => `Hello, ${name}!`;
console.log(greet('Likith')); // Output: Hello, Likith