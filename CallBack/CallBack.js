//Synchronous Callback:

    function greet(name, callback) {
        console.log("Hello, " + name);
        callback();  // Calling the callback function
    }

    function sayGoodbye() {
        console.log("Goodbye!");
    }

    greet("John", sayGoodbye);
    
    /* O/P:

    Hello, John
    Goodbye! */

//Asynchronous Callback:


    function fetchData(callback) {
        setTimeout(() => {
            console.log("Data fetched");
            callback();  // Callback is called once the asynchronous task is done
        }, 2000);
    }

    function processData() {
        console.log("Processing data");
    }

    fetchData(processData);
    
    /* O/P:

    Data fetched
    Processing data */