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
