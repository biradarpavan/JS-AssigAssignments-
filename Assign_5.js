console.log("\nAssignment 5 :")
console.log("Question 1 :")

function a(n1){     //here this is a outer function takes one argument n1
    let sum = 0     //here i created a variable to store the n1 + n2
    function b(n2){ //here this is a inner function (closure) takes another argument n2
        sum = n1 + n2    // here n1 adds n2 and store it into sum
        return console.log('Addition of n1 and n2 :',sum)  //here return the sum and print it to the console
    }
    return b     // here it returns the inner function b
}
//here i calls the outer function a with 10 and returns the inner function b which is stored in result
const result = a(10)   
result(20)//here i calls the returned function result (which is actually b) with 20 inside 
//b n1 is 10 from a and n2 is 20 so it returns 10 + 20 which is 30


console.log("\nQuestion 2 :")
function tracker1() {   //here i created a function to track how many times it called
    let count = 0           //here i created a variable to keep track of the count and initialized with 0
    function tracker2(){      //inner function (closure) that increments the count
        count++           // Increment the count
        return console.log('Call time :',count)     // return the updated count and print it to the console
    }
    return tracker2// here return the inner function
}

const counter = tracker1()  //here i created a counter and call tracker1 and assign the returned inner function to counter
counter()// here i call the counter and print count
counter()// again
counter()// and again


console.log("\nQuestion 3 :")
//here i created func and takes two arguments len and bre
//and it act as a constructor function that creates objects
function area_rect(len,bre){
    this.len = len // here assign len and bre property to the object being created
    this.bre = bre
}
area_rect.prototype.area = function(){// here add a method to the prototype to calculate area
    return this.len * this.bre// here calculate area and return it
}
//here i created a new object and pass the agrument to the func area_rect 10 and 20
const total = new area_rect(10,20)
console.log('Area of rectangle :',total.area())// here i call area method using area_rect object and it will print the area of rect


console.log("\nQuestion 4 :")
//here i created func and takes one argument radius
//and it act as a constructor function that creates objects
function Circle(radius) {
    this.radius = radius// here assign radius property to the object being created
}
Circle.prototype.area = function(){// here add a method to the prototype to calculate area of cirle
    return 3.14 * this.radius * this.radius// here calculate area and return it
}
Circle.prototype.perimeter = function(){// here add a method to the prototype to calculate perimeter of circle
    return 2 * 3.14 * this.radius// here calculate perimeter and return it
}
//here i created a new object and pass the agrument to the func circle 7
const total1 = new Circle(7)
console.log("Area of the circle :", total1.area())
// here i call area method using circle object and it will print the area of circle
console.log("Perimeter of the circle :", total1.perimeter())
// here i call perimeter method using circle object and it will print the perimeter of circle


console.log("\nQuestion 5 :")

function counter1(){//here created a outer func
    let count = 0//here declare a variable and initialize with 0

function increment(){//here created a inner func 
    count++//and increment the count by 1
}
function decrement(){//another inner func
    count--//and decrement the count by 1
}
function reset(){//another inner func
    count = 0//to reset the count to 0
}
function getValue(){//another inner func
    return count//here returns the current value of count
}
//here returning an object with methods that can access and modify the private count variable
return{
    increment,
    decrement,
    reset,
    getValue
}
}
const c = counter1()//here creating a reference of counter1
c.increment()//here call the increment func
console.log(c.getValue())//here it will print the current value that is 1
c.increment()//same as above
console.log(c.getValue())//here it will print the current value that is 2
c.decrement()//here call the decrement func
console.log(c.getValue())//here it will print the current value that is 1
c.reset()//here call the reset func 
console.log(c.getValue())//here it will print the reset value that is 0

