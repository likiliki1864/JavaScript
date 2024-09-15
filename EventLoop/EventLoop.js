//EventLoop:

        console.log("Start");                           // This is a synchronous operation and is logged immediately.

        setTimeout(() => {                              // setTimeout schedules the callback function to be added to the task queue after 0ms

           console.log("Macrotask from setTimeout");    // This will be added to the task queue and executed later
        }, 0);

        Promise.resolve().then(() => {                  // Promise resolves immediately and its .then() callback is added to the microtask queue

            console.log("Microtask from Promise");      // This will be added to the microtask queue and executed after the synchronous code
        });

        console.log("End");                             // This is also a synchronous operation and is logged immediately after "Start"


        /* O/P:-

            Start
            End
            Microtask from Promise
            Task from setTimeout */
