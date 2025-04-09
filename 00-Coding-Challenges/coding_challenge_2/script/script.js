// Data 1

let markWeight = 78;
let markHeight = 1.69;

let markBMI = (markWeight / markHeight ** 2).toFixed(1);

let johnWeight = 92;
let johnHeight = 1.95;

let johnBMI = (johnWeight / johnHeight ** 2).toFixed(1);

let markHigherBMI = markBMI > johnBMI;

console.log(`Mark: Weight=${markWeight}kg, Height=${markHeight}m, BMI=${markBMI}`);
console.log(`John: Weight=${johnWeight}kg, Height=${johnHeight}m, BMI=${johnBMI}`);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI} !`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI} !`);
}

// Data 2

markWeight = 95;
markHeight = 1.88;

markBMI = (markWeight / markHeight ** 2).toFixed(1);

johnWeight = 85;
johnHeight = 1.76;

johnBMI = (johnWeight / johnHeight ** 2).toFixed(1);

console.log(`Mark: Weight=${markWeight}kg, Height=${markHeight}m, BMI=${markBMI}`);
console.log(`John: Weight=${johnWeight}kg, Height=${johnHeight}m, BMI=${johnBMI}`);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI} !`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI} !`);
}
