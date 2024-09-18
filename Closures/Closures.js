//Closures

    function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
    }

    const counter = createCounter();
    counter(); // 1
    counter(); // 2