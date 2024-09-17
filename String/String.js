// charAt()
'hello'.charAt(1);  // 'e'

// charCodeAt()
'hello'.charCodeAt(1);  // 101

// concat()
'hello'.concat(' ', 'world');  // 'hello world'

// includes()
'hello world'.includes('world');  // true

// indexOf()
'hello world'.indexOf('world');  // 6

// lastIndexOf()
'hello world hello'.lastIndexOf('hello');  // 12

// localeCompare()
'hello'.localeCompare('world');  // -1 (less than)

// match()
'hello world'.match(/world/);  // ['world']

// padEnd()
'hello'.padEnd(10, '*');  // 'hello*****'

// padStart()
'hello'.padStart(10, '*');  // '*****hello'

// repeat()
'hello'.repeat(3);  // 'hellohellohello'

// replace()
'hello world'.replace('world', 'there');  // 'hello there'

// search()
'hello world'.search('world');  // 6

// slice()
'hello world'.slice(0, 5);  // 'hello'

// split()
'hello world'.split(' ');  // ['hello', 'world']

// substr()
'hello world'.substr(6, 5);  // 'world'

// substring()
'hello world'.substring(0, 5);  // 'hello'

// toLocaleLowerCase()
'HELLO WORLD'.toLocaleLowerCase();  // 'hello world'

// toLocaleUpperCase()
'hello world'.toLocaleUpperCase();  // 'HELLO WORLD'

// toLowerCase()
'HELLO WORLD'.toLowerCase();  // 'hello world'

// toString()
(123).toString();  // '123'

// toUpperCase()
'hello world'.toUpperCase();  // 'HELLO WORLD'

// trim()
'   hello world   '.trim();  // 'hello world'

// valueOf()
'hello'.valueOf();  // 'hello'
