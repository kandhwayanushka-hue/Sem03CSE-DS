let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
let operation = prompt("Enter operation (1-4)");

document.write("2: Subtraction<br>");
document.write("3: Multiplication<br>");
document.write("4: Division<br>");
function calculator(a, b, operation) {
    switch(operation){
        case 1:
            let sum=a+b;
            return sum;
            break;
            case 2:
                let sub=a-b;
                return sub;
                break;
                case 3:
                    let multiplication=a*b;
                    return multiplication;
                    break;
                    case 4:
                        let division=a/b;
                        return division;
                        break;
                    default:return ("invalid operation");
    }
}
alert("result:"+calculator(a,b,operation));