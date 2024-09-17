//Module:

    // module1.js
    export function sayHi() {
        return 'Hi!';
        }

    // module2.js
    import { sayHi } from './module1.js';
    console.log(sayHi()); // "Hi!"