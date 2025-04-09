// Data 1

let markWeight = 78;
let markHeight = 1.69;

let markBMI = markWeight / markHeight ** 2;

let johnWeight = 92;
let johnHeight = 1.95;

let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(`Mark: Weight=${markWeight}kg, Height=${markHeight}m, BMI=${markBMI}`);
console.log(`John: Weight=${johnWeight}kg, Height=${johnHeight}m, BMI=${johnBMI}`);

console.log("For Data 1 : Is Marks BMI higher? ", markHigherBMI);

// Data 2

markWeight = 95;
markHeight = 1.88;

markBMI = markWeight / markHeight ** 2;

johnWeight = 85;
johnHeight = 1.76;

johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log(`Mark: Weight=${markWeight}kg, Height=${markHeight}m, BMI=${markBMI}`);
console.log(`John: Weight=${johnWeight}kg, Height=${johnHeight}m, BMI=${johnBMI}`);

console.log("For Data 2 : Is Marks BMI higher? ", markHigherBMI);
