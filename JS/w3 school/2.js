const d = new Date();
const d = new Date("2022-03-25");



//new Date()
// new Date(date string)
//
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
//
// new Date(milliseconds)


const d = new Date("October 13, 2014 11:13:00");

const d = new Date("2022-03-25");



// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

const d = new Date(2018, 11, 24, 10, 33, 30, 0);



// 01 January 1970 plus 100 000 000 000 milliseconds is:

    const d = new Date(100000000000);


// January 01 1970 plus 24 hours is:

 const d = new Date(24 * 60 * 60 * 1000);
// or
const d = new Date(86400000);


const d = new Date();
d.toString();
//Sat May 25 2024 19:23:55 GMT+0300 (Moscow Standard Time)





const d = new Date("2015-03-25T12:00:00-06:30");



//getFullYear()	Get year as a four digit number (yyyy)
// getMonth()	Get month as a number (0-11)
// getDate()	Get day as a number (1-31)
// getDay()	Get weekday as a number (0-6)
// getHours()	Get hour (0-23)
// getMinutes()	Get minute (0-59)
// getSeconds()	Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	Get time (milliseconds since January 1, 1970)



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("2021-03-25");
let month = months[d.getMonth()];


let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}






// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)


Math.round(4.6);
Math.ceil(4.9);
Math.ceil(4.7);
Math.ceil(4.4);
Math.ceil(4.2);
Math.ceil(-4.2);



Math.pow(8, 2);
Math.sqrt(64);
Math.random();


// Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;


//Comparing two JavaScript objects always return false.




//The JavaScript for in statement loops through the properties of an Object:
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
    text += person[x];
}



//The JavaScript for of statement loops through the values of an iterable object.
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
    text += x;
}





// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");




//typeof "John"          // Returns "string"
// typeof ("John"+"Doe")  // Returns "string"
// typeof 3.14            // Returns "number"
// typeof (33 + 66)       // Returns "number"
// typeof NaN             // Returns "number"
// typeof 1234n           // Returns "bigint"
// typeof true            // Returns "boolean"
// typeof false           // Returns "boolean"
// typeof {name:'John'}   // Returns "object"
// typeof [1,2,3,4]       // Returns "object"
// typeof {}              // Returns "object"
// typeof []              // Returns "object"
// typeof new Object()    // Returns "object"
// typeof new Array()     // Returns "object"
// typeof new Date()      // Returns "object"
// typeof new Set()       // Returns "object"
// typeof new Map()       // Returns "object"
// typeof function () {}  // Returns "function"
// typeof x               // Returns "undefined"
// typeof null            // Returns "object"








let text = "Visit W3Schools!";
let n = text.search("W3Schools");
//6




let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");


try {
    adddlert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}
finally {
    // Block of code to be executed regardless of the try / catch result
}

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML=
    "My car is " + myCar.age(year) + " years old.";




let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const obj = JSON.parse(text);





// Each statement in a loop, including the for statement, is executed for each iteration of the loop.
// Better Code:
    let l = arr.length;
for (let i = 0; i < l; i++) {
}



//Reduce DOM Access
// Accessing the HTML DOM is very slow, compared to other JavaScript statements.
// If you expect to access a DOM element several times, access it once, and use it as a local variable:
const obj = document.getElementById("demo");
obj.innerHTML = "Hello";



























