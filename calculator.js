function calculator(op){
    let a=Number(document.getElementById("num1").value);
    let b=Number(document.getElementById("num2)".value));
    let result;
    switch(op){
        case "+":result=a+b;break;
        case "-":result=a-b;break;
        case "*":result=a*b;break;
        case "/":result=b?a/b:"Cannot divide by zero";break;
    }
    document.getElementById("result").innertext="Result:"+result;
}