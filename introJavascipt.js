function SubmitEvent(){
    let a=10;
    let b=20;
    console.log(a+b);
}
function AboutUser(){
    alert("Welcome to Javascript");
    document.write("Enter your name");
    confirm("Are you sure you want to continue?");
    prompt("Please enter your name");
    document.write("Thank you for your response");
}

function Sum(a, b){
    let sum=a+b;
    console.log(sum);
}
let d=10;
console.log(d);
console.log(typeof(d));
document.write(d);

let c=20.5;
console.log(c);
console.log(typeof(c));
document.write(c);

let e="Hello World";
console.log(e);
console.log(typeof(e));
document.write(e);

let f=true;
console.log(f);
console.log(typeof(f));
document.write(f);

let g=null;
console.log(g);
console.log(typeof(g));
document.write(g);

let h=undefined;
console.log(h);
console.log(typeof(h));
document.write(h);

let i=Symbol("Hello World");
console.log(i);
console.log(typeof(i));
document.write(i);

let j=BigInt(1234567890123456789012345678901234567890);
console.log(j);
console.log(typeof(j));
document.write(j);

let k=["Apple", "Banana", "Orange"];//it will show as object
console.log(k);
console.log(typeof(k));
document.write(k);


let a=10;
let b=20;
Sum(a, b);
AboutUser();
parseFloat(a/b);
parseInt(a/b);
string="Hello World";
parseInt(string);
console.log(string);
parseFloat(string);
console.log(string);
SubmitEvent();

    