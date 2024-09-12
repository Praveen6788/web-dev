let random = Math.random();
let a = prompt("Enter the first number:");
let b = prompt("Enter the second number:");
let c = prompt("Enter the operation:");

let obj = {
    "+": "-",
    "-": "+",
    "*": "?",
    "/": "**"
};

// Make sure to handle numbers properly by converting the inputs from strings to numbers
a = Number(a);
b = Number(b);

if (random > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
