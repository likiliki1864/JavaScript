//Prottypes:        
        function Person(name, age) {
        this.name = name;
        this.age = age;
        }

        Person.prototype.sayHello = function() {
                console.log("Hello, my name is " + this.name);
        }; 
               
        const person1 = new Person("Likith", 25);
        person1.sayHello(); // Output: Hello, my name is Likith

        const person2 = new Person("Bharath", 30);
        person2.sayHello(); // Output: Hello, my name is Bharath