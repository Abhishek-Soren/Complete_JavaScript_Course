// Test Data
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

// FUnction to calculate average
function calcAverage(scores) {
    let average = 0;
    for (const element of scores) {
        average += element;
    }
    average /= scores.length;
    average = average.toFixed(2);
    return average;
}

// Function to determine winner with bonuses
function determineWinner(dolphinsScore, koalasScore) {
    let dolphinsAverage = calcAverage(dolphinsScore);
    let koalasAverage = calcAverage(koalasScore);

    console.log(`Dolphins Average: ${dolphinsAverage}, Koalas Average: ${koalasAverage}`);

    console.log("Basic Calculation");

    if (dolphinsAverage > koalasAverage) {
        console.log("Dolphins win.");
    } else if (dolphinsAverage === koalasAverage) {
        console.log("Draw.");
    } else {
        console.log("Koalas win");
    }
    console.log("Bonus Calculation");
    if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
        console.log("Dolphins win.");
    } else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
        console.log("Koalas win");
    } else if (
        dolphinsAverage === koalasAverage &&
        dolphinsAverage >= 100 &&
        koalasAverage >= 100
    ) {
        console.log("Draw.");
    } else {
        console.log("NO team wins");
    }
}

// Test cases
console.log("--- Data 1 ---");
determineWinner(dolphinsScores1, koalasScores1);

console.log("\n--- Bonus Data 1 ---");
determineWinner(dolphinsScoresBonus1, koalasScoresBonus1);

console.log("\n--- Bonus Data 2 ---");
determineWinner(dolphinsScoresBonus2, koalasScoresBonus2);
