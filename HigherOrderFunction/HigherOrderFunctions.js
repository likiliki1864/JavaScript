//Higher Order Functions

    function greet() {
      return 'Hello!';
    }

    function higherOrderFunction(fn) {
      return fn();
    }

    higherOrderFunction(greet); // "Hello!"