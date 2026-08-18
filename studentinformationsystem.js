// Function to multiply two numbers
function multiply(a,b)
{
    return a*b;
}
let result=multiply(3,4);
document.write("Multiplication of 3 and 4 is: "+result);
console.log("Multiplication of 3 and 4 is: "+result);

//to take input at runtime 
let a=parseInt(prompt("Enter first number:"));
let b=parseInt(prompt("Enter second number:"));
let result1=multiply(a,b);
document.write("<br>Multiplication of "+a+" and "+b+" is: "+result1);
console.log("Multiplication of "+a+" and "+b+" is: "+result1);



