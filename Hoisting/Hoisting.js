//Hoisting

var x = 5;
console.log(x); // 5

// Hoisting with function
hello(); // 'Hello!'

function hello() {
  return 'Hello!';
}