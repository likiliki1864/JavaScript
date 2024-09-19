//Apply():

function introduce(age, city) {
    console.log(`I am ${this.name}, ${age} years old from ${city}`);
}

const person = { name: "LIKITH" };
introduce.apply(person, [22, "Benguluru"]); // I am LIKITH, 22 years old from Benguluru


