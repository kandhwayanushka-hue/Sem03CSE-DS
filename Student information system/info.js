let name=prompt("Enter the name of the student")
let roll=prompt("Enter the Roll no")
let total=parseInt("Enter the total number of subjects")
let sum=0
for (let i=0;i<total*100;i++){
    let marks=parseInt("Enter the marks of subject"+(i+1))
    sum+=marks
}
let percentage=sum/(total*100)*100
if (percentage>=40){
    document.write("The student "+name+" with roll no "+roll+" has passed with percentage "+percentage)
    console.log("the student "+name+" with roll no "+roll+" has passed with percentage "+percentage)
}
else{
    document.write("The student "+name+" with roll no "+roll+" has failed with percentage "+percentage)
    console.log("the student "+name+" with roll no "+roll+" has failed with percentage "+percentage)
}
if (percentage>=90){
    document.write("grade A")
    console.log("grade A")
}else if (percentage>=80){
    document.write("grade B")
    console.log("grade B")
}else if (percentage>=70){
    document.write("grade C")
    console.log("grade C")
}else if (percentage>=60){
    document.write("grade D")
    console.log("grade D")
}else if (percentage>=50){
    document.write("grade E")
    console.log("grade E")
}else if (percentage>=40){
    document.write("grade F")
    console.log("grade F")
}else{
    document.write("Fail")
    console.log("grade G")
}
