let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
let op = prompt("Enter operation (1-4)");

document.write("1: Addition<br>");
document.write("2: Subtraction<br>");
document.write("3: Multiplication<br>");
document.write("4: Division<br>");

function calculator(a, b, operation) {
    switch (operation) {
        case "1": {
            let sum = a + b;
            return sum;
        }
        case "2": {
            let sub = a - b;
            return sub;
        }
        case "3": {
            let mul = a * b;
            return mul;
        }
        case "4": {
            let div = a / b;
            return div;
        }
        default:
            return "invalid operation";
    }
}

alert("Result: " + calculator(a, b, op));