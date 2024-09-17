//Class:
    class Person {
        constructor(name) {
        this.name = name;
        }
        greet() {
        return `Hello, ${this.name}`;
        }
    }
    
    const person = new Person('LIKITH');
    console.log(person.greet()); // "Hello, LIKITH"
    