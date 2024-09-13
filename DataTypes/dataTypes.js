//Primitive DataTypes:

//Number
let age = 25;          // integer
let temperature = 98.6; // floating-point
console.log(age);      // 25
console.log(temperature); // 98.6

//String
let name = "Alice";
let greeting = `Hello, ${name}!`; // template literal
console.log(name);       // Alice
console.log(greeting);   // Hello, Alice!

//Boolean
let isActive = true;
let isLoggedIn = false;
console.log(isActive);   // true
console.log(isLoggedIn); // false

//Undefined
let x;
console.log(x); // undefined

//Null
let user = null;
console.log(user); // null

//Symbol
let uniqueID = Symbol('id');
console.log(uniqueID); // Symbol(id)

//BigInt
let bigNumber = BigInt(123456789012345678901234567890);
console.log(bigNumber); // 123456789012345678901234567890n

/*============================================================================================================*/

//Non-Primitive DataTypes:

//Object
let person = {
  name: "LIKITH",
  age: 22,
  isEmployed: true
};
console.log(person); // { name: 'John', age: 30, isEmployed: true }

//Array
let colors = ["red", "green", "blue"];
console.log(colors); // [ 'red', 'green', 'blue' ]

//Function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Hello, Alice!

//Date
let now = new Date();
console.log(now); // Current date and time, e.g., 2024-09-14T08:00:00.000Z

//RegExp
let pattern = /ab+c/;
console.log(pattern); // /ab+c/
