console.log("\nAssignment 1 :")
console.log("Question 1 :")

let str = "Hello World!!!"; 
//here i declare a variable str using let keyword and assign the string value

console.log("Value:",str,"Type:", typeof(str)); 
// here typeof will print the type of the variable here it is string 

let number = 42;
//here i declare a variable num using let keyword and assign the numbers value

console.log("Value:",number,"Type:", typeof(number));
// here typeof will print the type of the variable here it is number 

let bool = true;
//here i declare a variable bool using let keyword and assign the boolean value 

console.log("Value:",bool,"Type:", typeof(bool));
// here typeof will print the type of the variable here it is boolean

let iphone = {
  name: "iphone12",  //here iphone is an object with properties like name,price and rating and name, price and rating are keys
  price: 125000,     //and values are iphone12, 125000 and 3.9
  rating: 3.9
};

console.log("Value:",iphone,"Type:",typeof(iphone));
// here typeof will print the type of the variable here it is object

let arr = [1, 2, 3, 4, 5,"hello"];
//here arr is a variable and it stores numbers and one string in an array

console.log("Value:",arr,"Type:", typeof(arr));
//Array is consider object in js so it will print type is object


console.log("\nQuestion 2 :")
let num1 = parseInt(prompt("Enter num1: "))//here i write parseint to take integer value from the user
let num2 =parseInt(prompt("Enter num2: "))//and it will convert string to int

// here are arithmetic operations
let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;

// below it will Display the results
console.log("Addition of two numbers are: ",add);
console.log("Subtraction of two numbers are: ",sub);
console.log("Multiplication of two numbers are: ",mul);
console.log("Divison of two numbers are: ",div);


console.log("\nQuestion 3 :")
let num = parseInt(prompt("Enter number: ")); // Here I use parseInt to take an integer value from the user and it will convert 
// string to int

if (num > 0) {// Check if the number is greater than 0
    console.log(num, "Entered Number is positive."); // If the number is positive print this message
}

else if (num < 0) {// Check if the number is less than 0
    console.log(num, "Entered Number is negative."); // If the number is negative print this message
}

else if (num == 0) {// Check if the number is equal to 0
    console.log(num, "Entered Number is zero."); // If the number is zero print this message
}

else {
    console.log("Invalid number!!!"); // If the input is not a valid number print this message
}


console.log("\nQuestion 4 :")
for (let i = 1; i <= 20; i++) {// i start with 1 and increment by 1 till 20
    if (i%2 != 0) {// Check if the number is odd
        continue; // Skip the rest of the loop if the number is odd
    }
    console.log(i);// It will print the even num to the console
}


console.log("\nQuestion 5 :")
let numb = parseInt(prompt("Enter a num between 0 to 100: "));// Here I use parseInt to take an integer value from the user and it will convert 
// string to int 
if (numb>=90 && numb<=100 ){// Check if the num is greater than equal to 90 and less than equal to 100
    console.log("Your grade is 'A'")// if above condition is true, It will print grade 'A'
}
else if (numb >= 80 && numb <= 89) {// Check if the num is greater than equal to 80 and less than equal to 89
    console.log("Your grade is 'B'"); // if above condition is true, It will print grade 'B'
}
else if (numb >= 70 && numb <= 79) {// Check if the num is greater than equal to 70 and less than equal to 79
    console.log("Your grade is 'C'"); // if above condition is true, It will print grade 'C'
}
else if (numb >= 60 && numb <= 69) {// Check if the num is greater than equal to 60 and less than equal to 69
    console.log("Your grade is 'D'");// if above condition is true, It will print grade 'D'
}
else if (numb >= 0 && numb <= 59) {// Check if the num is greater than equal to 0 and less than equal to 59
    console.log("Your grade is 'F'");// if above condition is true, It will print grade 'F'
}
else {
    console.log("Enter a valid number between 0 to 100"); // If the input is not a valid number within the range 0-100 print this message
}