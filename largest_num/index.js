var num1 = 20;
var num2 = 30;
var num3 = 40;

if(num1 >= num2 && num1 >= num3){
    largest = num1;
}else if(num2 >= num1 && num2 >= num3){
    largest = num2;
}else{
    largest = num3;
}

console.log("The largest number is " + largest);
document.write("The largest number is " + largest);