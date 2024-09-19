//Call():

function greet(greeting) {
    console.log(`${greeting}, I am ${this.name}`);
}

const person = { name: "LIKITH" };
greet.call(person, "Hello"); // Output: "Hello, I am LIKITH"