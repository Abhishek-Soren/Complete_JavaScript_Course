// 1. Values and Variables

// Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.

let country = "India";
let continent = "Asia";
let population = 1400000000;

console.log(
    country + ", whose population is " + population + " is in the continent of " + continent
);

// 2. Data Types

// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// Log the types of isIsland, population, country and language to the console.

let isIsland = false;
let language;

console.log("My country is island? " + isIsland);
console.log("language : " + language);

// 3. let, const and var

// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// Try to change one of the changed variables now, and observe what happens.

language = "hindi";
// const country = "India";
// const continent = "Asia";
// const isIsland = false;
// isIsland = true; //error Uncaught ReferenceError: Cannot access 'country' before initialization at script.js:12:5
console.log("language : " + language);

// 4. Basic Operators
// If your country split in half, and each half would contain half the population, then how many people would live in each half?

// Increase the population of your country by 1 and log the result to the console.

// Finland has a population of 6 million. Does your country have more people than Finland?

// The average population of a country is 33 million people. Does you country have less people than the average country?

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

console.log(population / 2);
console.log(population + 1);
console.log(
    "Finland has a population of 6 million. Does your country have more people than Finland? ",
    population > 6000000
);
console.log(
    "The average population of a country is 33 million people. Does you country have less people than the average country? ",
    population < 33000000
);

let description =
    country + " is in " + continent + ",  and its " + population + " people speak " + language;

console.log(description);

// 7. Type Conversion and Coercion

console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 617
console.log("19" - "13" + 17); // -> '23'
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

// 8. Equality Operators: == vs. ===

// Declare a variable numNeighbours based on a prompt input like this:

// prompt('How many neighbour countries does your contry have?');
// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

// Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

// Test the code with different values of numNeighbours, including 1 and 0.

// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

// Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

// Reflect on why we should use the === operator and type conversion in this situation.

/*

let numNeighbours = Number(prompt("How many neighbour countries does your contry have?"));

console.log(numNeighbours);

if (numNeighbours === 1) {
    console.log("Only 1 border!");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}

*/

// 9. The switch Statement

// Use a switch statement to log the following string for the given language:

// chinese or mandarin: 'MOST number of native speakers!';

// spanish: '2nd place in number of native speakers';

// english: '3rd place';

// hindi: 'Number 4';

// arabic: '5th most spoken language';

// for all other simply log 'Great language too :D'.

switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}

// 10. The Conditional (Ternary) Operator

// If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

population > 33
    ? console.log(`${country}'s population is above average.`)
    : console.log(`${country}'s population is below average.`);

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);
