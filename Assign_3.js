console.log("\nAssignment 3 :");
console.log("Question 1 :");

//here i created function to capitalize each string in the array and take one arrgument
function capitalizeStrings(arr) {
    const firstCap = []//here i initializes an empty array to store the capitalized strings
    
    //here using for loop the loop is initialized with 0 and run till i is smaller than length of arr and increment one by one 
    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]//here the current element of arr[i] will be assign in str variable 

        //here Capitalize the first letter and concatenate it with the rest of the string using concat
        const capitalizedStr = str.charAt(0).toUpperCase().concat(str.slice(1));
        firstCap.push(capitalizedStr)//here add the capitalized string to the firstCap array
    }
    return firstCap//here it will return the array of capitalized strings
}
//here i created an array with some strings that is to capitalized each staring word
const arr = ["apple", "banana", "cherry", "watermelon"]
console.log(capitalizeStrings(arr))//here i call the func and pass the arr as an argument
//it will print the array with capitalized strings to the console


console.log("\nQuestion 2 :")

//here created a function named secLargest that takes one argument
function secLargest(arr) {
    //here created variables to store the largest and second largest element of the arr
    let largest = arr[0]//here assume that the first element is the largest
    let secondLargest = arr[0]//here also assume that the first element is the second largest

    //here using for loop the loop is initialized with 0 and run till i is smaller than length of arr and increment one by one 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {//here Check if the current element arr[i] is greater than the current largest
            secondLargest = largest//then update secondLargest to previous largest
            largest = arr[i]//and then update largest to the current element arr[i]
        } 
        //here check if the current element arr[i] is greater than the current secondLargest
        // and it is not equal to the largest element
        else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]// here update secondLargest to the current element arr[i] if the given condition is true
        }
    }

    return secondLargest//here return the secondLargest element in the arr
}
const arr1 = [3, 1, 79, 4, 2, 5, 77, 65, 78]//here created an array with numbers
console.log('Second large element is:',secLargest(arr1))//here i call the func and pass the arr1 as an argument
// and it will print the array with second large element to the console


console.log("\nQuestion 3 :")
function getValuesByKey(objects, key) {//here i created a function that takes two arguments objects and key
    let values = []//here i created variable empty array to store the values

    //here using for loop the loop is initialized with 0 and run till i is smaller than length of object and increment one by one 
    for (let i = 0; i < objects.length; i++){
        //here access the value of the current object by the key
        values.push(objects[i][key])//and then values of key will be add into in the values variable
    }
    return values//here it will return the values variable which is consist of values of key
}
//here is an array of object is created
const objects = [{name: "John", age: 25}, {name: "Jane", age: 30}, {name: "Jim", age: 20}]
const key = "name"//here i specify the key for which keys values i want 
console.log(getValuesByKey(objects, key))//here i call the getValuesByKey function with the objects array and key and print the result of it


console.log("\nQuestion 4 :")
function factorialarray(numbers){//here i created a func and it takes one argument
    const factorial = []//here created an empty array to store the factorial result
    let result = 1//here initialize the result with 1
    //here using for loop the loop is initialized with 0 and run till i is smaller than length of numbers and increment one by one 
    for (let i = 0; i < numbers.length; i++){
        result *= numbers[i]//it will multiply the current element with result value store it into result 
        factorial.push(result)//here it will add the result elements into factorial 
    }
    return factorial//it will return the elements of it
}
//here created an array with numbers
const numbers = [1,2,3,4]
console.log(factorialarray(numbers))//here i call the func and pass the array as an argument and it will print the result of it into the console


console.log("\nQuestion 5 :")
function similar(arr1, arr2){//here i created func which takes two arrays as arguments 
    let result = []//here it will store the same element in both the array
    //here using for loop the loop is initialized with 0 and run till i is smaller than length of arr1 and increment one by one 
    for (let i = 0; i < arr1.length; i++){ 
    //here using for loop the loop is initialized with 0 and run till i is smaller than length of arr2 and increment one by one 
        for (let j = 0; j < arr2.length; j++){ 
            if (arr1[i] == arr2[j]){// here it will checks if element at index i in arr1 is equal to element at index j in arr2
                result.push(arr1[i])//if above condition is true then it will add element into result
            }
        }
    }
    return result//herer it will return the result variable values
}
const array1 = [1, 2, 3, 4]//here created an two array with numbers
const array2 = [3, 4, 5, 6]
console.log(similar(array1, array2))//here i call the func and pass the array1 and array2 as an argument and it will print the result of it into the console
