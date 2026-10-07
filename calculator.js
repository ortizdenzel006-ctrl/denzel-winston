let num1 = 10000;
let num2 = 200;

console.log("===== CALCULATOR =====");
console.log("Number 1: " + num1);
console.log("Number 2: " + num2);

console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));
console.log("Remainder: " + (num1 % num2));
console.log("Power: " + (num1 ** num2));

console.log("Average: " + ((num1 + num2) / 2));
console.log("Maximum: " + Math.max(num1, num2));
console.log("Minimum: " + Math.min(num1, num2));
console.log("Are they equal? " + (num1 === num2));

console.log("Percentage: " + ((num2 / num1) * 100) + "%");
console.log("Absolute Difference: " + Math.abs(num1 - num2));

if (num1 > num2) {
    console.log("Number 1 is greater than Number 2");
} else if (num1 < num2) {
    console.log("Number 1 is less than Number 2");
} else {
    console.log("Both numbers are equal");
}