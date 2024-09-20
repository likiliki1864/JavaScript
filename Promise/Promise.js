//Promise:

    const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed!");
    }
    });

    myPromise
    .then(result => {
        console.log(result);  // Logs: "Operation succeeded!" if resolved
    })
    .catch(error => {
        console.log(error);  // Logs: "Operation failed!" if rejected
    })
    .finally(() => {
        console.log("Promise completed");  // Always executed
    }); 

    /* O/P:
    
    Operation succeeded!
    Promise completed */

//PromiseChaining:-

    const promise1 = new Promise((resolve, reject) => {
    resolve("First promise resolved");
    });

    promise1
    .then(result => {
        console.log(result); // Logs: "First promise resolved"
        return "Second promise resolved";
    })
    .then(result => {
        console.log(result); // Logs: "Second promise resolved"
    })
    .catch(error => {
        console.error(error);
    });

    /* O/P:-
        First promise resolved
        Second promise resolved */

// Promise.all() example

    let Promise1 = Promise.resolve("Promise 1 resolved");
    let promise2 = Promise.resolve("Promise 2 resolved");

    Promise.all([Promise1, promise2]).then(
    (results) => console.log("All resolved:", results),
    (error) => console.error("One rejected:", error)
    );

// Promise.allSettled() example
    Promise.allSettled([promise1, promise2]).then((results) => {
    console.log("AllSettled Results:", results);
    });

// Promise.any() example
    let promise3 = Promise.reject("Promise 3 rejected");

    Promise.any([promise1, promise3])
    .then((result) => console.log("First fulfilled:", result))
    .catch(() => console.log("All promises rejected"));

// Promise.race() example
    Promise.race([promise1, promise3])
    .then((result) => console.log("First settled:", result));

// Promise.resolve() example
    Promise.resolve("Immediate success").then((value) =>
    console.log("Resolved with:", value)
    );

// Promise.reject() example
    Promise.reject("Immediate failure").catch((reason) =>
    console.error("Rejected with:", reason)
    );