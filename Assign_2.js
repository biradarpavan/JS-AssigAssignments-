console.log("\nAssignment 2 :")
console.log("Question 1 :")

for (let i=1;i<=10;i++){//outer loop to iterate numbers from 1 to 10
    console.log('\nTable of:',i)//it will print current no, which table will print means
    for (let j=1;j<=10;j++){//inner loop to generate the current table 1 to 10
        console.log(i,'*',j,'=',i*j)//print each no 1 to 10 in this formate of every table
    }
}


console.log("\nQuestion 2 :")
let array = [1,2,3,4,5,6,7]//here i declare an array of numbers
let sum =0//here declare sum with 0 value to store the result 
for (let i=0;i<array.length;i++){//here loop iterate through each element in the array
    sum = sum+array[i]//add each element to the sum variable and store it into it
}
console.log("Sum of Numbers in an Array is:",sum)//it will print the sum variable


console.log("\nQuestion 3 :")
function isPalindrome(str1) {//here is a func to check the str is palindrome or not
    let str2 = str1.toLowerCase();//Convert the str1 to lower case and move it to str2
    let reverse = '';//here i created the empty str to store the reversed string
    for (let i = str2.length - 1; i >= 0; i--){//it will reverse the str 
        reverse += str2[i];//here the from the last str of str2 will add one by one into the reverse variable
    }
    if (reverse == str2){//it will compare the reversed str with str2 var
        return true;//from above condition it will return true or false 
    } else {
        return false;
    }
}
console.log(isPalindrome('LEVEL'))// //here i pass the argument/value into the function
//e.g it will print true 
console.log(isPalindrome('Hello'))//false 
console.log(isPalindrome('Nitin'))//true


console.log("\nQuestion 4 :")
let n1 = 0;//here i declare the first two values of fibo nos
let n2 = 1;
let arr = [n1, n2]; // here i initialize the array with the first two Fibo nos
function fibo_gene(n){
    if (n==0){
        return arr[0]//return the first Fibo no if n is 0
    }
    for (let i = 2; i <= n; i++){//here loop will start with 2 and run till n num
        let sum = n1 + n2;
        arr.push(sum);//here push the sum into the array
        n1 = n2; //here Update n1 and n2 with to the next num in the sequence
        n2 = sum; 
    }
    return arr//it will return the values in the arr
}
console.log(fibo_gene(10))//here i pass the argument/value into the function


console.log("\nQuestion 5 :")
let n=0
if(n==0){//to enter into the if block i do this
    var First_name = 'Pavan'//here i declare First_name using var
    let surname = 'Biradar'//here i declare surname using let 
    const age = 18//here i declare age using const keyword
    console.log('First name:',First_name)//here i print the variable into the if-block and it will print first name 
    console.log('Surname:',surname)//and it will print surname 
    console.log('Age is :',age)//and it will prime age
}
//here outside of block attemp to access
console.log('First name:',First_name)//here it is function scope so it is accessible outside of block
console.log('Surname:',surname)//here it is block scope so it is not accessible because it is only accessible into block only
//so it will give an error
console.log('Age is :',age)//here it is block scope so it is not accessible because it isonly accessible into block only 
//and const means immutable, so it will give an error