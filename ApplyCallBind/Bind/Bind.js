//Bind():

function showInfo(age) {
    console.log(`${this.name} is ${age} years old`);
}

const person = { name: "LIKITH" };
const boundFunction = showInfo.bind(person, 22);

boundFunction(); // Output: "LIKITH is 22 years old"