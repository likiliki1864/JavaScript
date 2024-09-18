//Higher Order Functions

    function greet() {
      return 'Hello!';
    }

    function higherOrderFunction(fn) {
      return fn();
    }

    higherOrderFunction(greet); // "Hello!"

    // Function that takes another function as an argument
    function applyFunction(fn, value) {
      return fn(value);
    }

    function double(x) {
      return x * 2;
    }

    console.log(applyFunction(double, 5)); // Outputs: 10
