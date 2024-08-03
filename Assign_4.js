Dconsole.log("\nAssignment 4 :")
console.log("Question 1 :")

function getKeysAndValues(obj){    //here i created a func it takes one argument 
    const result = []   //here i declared an isEmpty array which will be used to store the key value pairs from the object
        for(let i in obj){         //here it will iterate over each key in the object 
                result.push([i, obj[i]])    //here it will push the key value pair as an array into the result
            }
            return result   //here it will return an result array
        }
        
let iphone = { i10: "50000", i12: "120000", i15: "150000" }// here i created an object 
console.log(getKeysAndValues(iphone))   //here i call a func and init pass an object and it will print it


console.log("\nQuestion 2 :")

function toTitleCase(str) {     //here i created a func it will take one argument 
    let s = str.split(' ')  //split the string into an array of s
    //here using for loop the loop is initialized with 0 and run till i is smaller than length of s and increment one by one
    for (let i = 0; i < s.length; i++) {
        //here first convert the first char to uppercase and the rest of word into small case by using toLowerCase 
        //and for that we are slicing the word
        s[i] = s[i].charAt(0).toUpperCase().concat(s[i].slice(1).toLowerCase())
    }
    let str1 = s.join(' ')//here it will join the words back into a single string and and store it into str1 variable
    return str1  //here it will return the updated string 
}
console.log(toTitleCase("pavan biradar"))//here i call the func and pass the string and it will print the o/p to the console


console.log("\nQuestion 3 :")

function isEmpty(obj) {//here i created a func and it takes one argument
    if(Object.keys(obj).length == 0){//here it checks if the lenght of the keys of the object is equal to 0
        return console.log('it is not empty so it is',false)//if the obj has no key then return false and print the message 
    }
    return console.log('it is empty so it is',true)// else true
}
  let a = {}//empty obj is created 
  let b = { a1:'name', b1:'age' }//obj is created

  isEmpty(a)//call the func and pass the obj as argument 
  isEmpty(b)
 

console.log("\nQuestion 4 :")

function charCount(str){//here i created a func and it takes one argument
    let count = {}//here created an empty obj to store the key value pairs of char and count
    for (let char of str){//here this loop will iterates through every character of string 
        if(count[char]){//if the current char already exist then below
            count[char] += 1//if yes then increment count by 1 
        }
        else{
            count[char] = 1//if no then add char(key) and it will initialize by 1(value) in obj
        }
    }
    return count // here it will return the count obj
}
console.log(charCount("hello"))//call the func and pass the string as argument and it will print the o/p in the console
