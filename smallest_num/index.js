var num1 = prompt("Enter the number1");
var num2 = prompt("Enter the number2");
var num3 = prompt("Enter the number3");

if(num1 <= num2 && num1 <= num3){
    smallest = num1;
}else if(num2 <= num1 && num2 <= num3){
    smallest = num2;
}else {
    smallest = num3;
}

console.log("The smallest number is " + smallest);
document.write("The smallest number is " + smallest);