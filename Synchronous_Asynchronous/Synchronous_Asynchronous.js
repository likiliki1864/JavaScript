//Synchronous:-

        console.log('Start');
        function syncOperation() {
        for (let i = 0; i < 3; i++) {
            console.log(i); // Logs 0, 1, 2
        }
        }
        syncOperation();
        console.log('End');

        /* O/P: 
            Start
            0
            1
            2
            End */

//Asynchronous:-

        console.log('Start');
        setTimeout(function() {
            console.log('This is asynchronous');
        }, 1000); // Executes after 1 second
        console.log('End');

        /* O/P:
            Start
            End
            This is asynchronous */