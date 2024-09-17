// Array.from()
Array.from('hello');  // ['h', 'e', 'l', 'l', 'o']

// Array.isArray()
Array.isArray([1, 2, 3]);  // true

// Array.of()
Array.of(7);  // [7]

// concat()
[1, 2].concat([3, 4]);  // [1, 2, 3, 4]

// copyWithin()
[1, 2, 3, 4].copyWithin(2, 0);  // [1, 2, 1, 2]

// entries()
let iterator = ['a', 'b'].entries();
for (let e of iterator) console.log(e);  // [0, 'a'], [1, 'b']

// every()
[1, 2, 3].every(x => x > 0);  // true

// fill()
[1, 2, 3].fill(0);  // [0, 0, 0]

// filter()
[1, 2, 3].filter(x => x > 1);  // [2, 3]

// find()
[1, 2, 3].find(x => x > 1);  // 2

// findIndex()
[1, 2, 3].findIndex(x => x > 1);  // 1

// flat()
[1, [2, [3]]].flat();  // [1, 2, [3]]

// flatMap()
[1, 2].flatMap(x => [x, x * 2]);  // [1, 2, 2, 4]

// forEach()
[1, 2, 3].forEach(x => console.log(x));  // Logs 1, 2, 3

// includes()
[1, 2, 3].includes(2);  // true

// indexOf()
[1, 2, 3].indexOf(2);  // 1

// join()
[1, 2, 3].join('-');  // '1-2-3'

// keys()
let keys = ['a', 'b'].keys();
for (let key of keys) console.log(key);  // Logs 0, 1

// lastIndexOf()
[1, 2, 3, 2].lastIndexOf(2);  // 3

// map()
[1, 2, 3].map(x => x * 2);  // [2, 4, 6]

// pop()
[1, 2, 3].pop();  // 3, array becomes [1, 2]

// push()
[1, 2].push(3);  // 3, array becomes [1, 2, 3]

// reduce()
[1, 2, 3].reduce((acc, x) => acc + x, 0);  // 6

// reduceRight()
[1, 2, 3].reduceRight((acc, x) => acc + x, 0);  // 6

// reverse()
[1, 2, 3].reverse();  // [3, 2, 1]

// shift()
[1, 2, 3].shift();  // 1, array becomes [2, 3]

// slice()
[1, 2, 3].slice(1, 3);  // [2, 3]

// some()
[1, 2, 3].some(x => x > 2);  // true

// sort()
[3, 1, 2].sort();  // [1, 2, 3]

// splice()
[1, 2, 3].splice(1, 1);  // [2], array becomes [1, 3]

// toLocaleString()
[1, 2, 3].toLocaleString();  // '1,2,3'

// toString()
[1, 2, 3].toString();  // '1,2,3'