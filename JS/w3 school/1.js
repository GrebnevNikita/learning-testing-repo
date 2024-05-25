document.getElementById("demo").innerHTML = "Hello JavaScript";

//<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>
// <img id="myImage" src="pic_bulboff.gif" style="width:100px">
// <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>


document.getElementById("demo").style.fontSize = "35px";
document.getElementById("demo").style.display = "none";

//<script src="myScript.js"></script>
console.log(5 + 6);
window.print();

let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c
let person = "Hege";
let person="Hege";



//Underscore:
// first_name, last_name, master_card, inter_city.
// Upper Camel Case (Pascal Case):
// FirstName, LastName, MasterCard, InterCity.
// Lower Camel Case:
// firstName, lastName, masterCard, interCity.


//JavaScript uses the Unicode character set.
//
// Unicode covers (almost) all the characters, punctuations, and symbols in the world.


//Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const


//let and const have block scope.
// let and const can not be redeclared.
// let and const must be declared before use.
// let and const does not bind to this.
// let and const are not hoisted.


//Cannot be Reassigned
// A variable defined with the const keyword cannot be reassigned:
const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error


//Block Scope
const x = 10;
// Here x is 10

{
    const x = 2;
// Here x is 2
}

// Here x is 10

//JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object
//
// The Object Datatype
// The object data type can contain:
//
// 1. An object
// 2. An array
// 3. A date


// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


let x = 16 + "Volvo";
let x = "16" + "Volvo";
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123


// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
}

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
    return a * b;
}


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};


//<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

//String length
// String charAt()
// String charCodeAt()
// String at()
// String [ ]
// String slice()
// String substring()
// String substr()
// String Search Methods
// String Templates
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()


let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

let text = "HELLO WORLD";
let char = text.charAt(0);


let text = "HELLO WORLD";
let char = text[0];

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);

let text1 = "Hello World!";
let text2 = text1.toUpperCase();

let text1 = "      Hello World!      ";
let text2 = text1.trim();

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
text.split("")


let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
// it returns -1 if the string is not found:
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");

let text = "Hello world, welcome to the universe.";
text.includes("world");
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");
let text = "John Doe";
text.endsWith("Doe");


let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000


Number.isInteger(10);
Number.isInteger(10.5);

let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);

let x = 9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);

parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");

parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");

const cars = ["Saab", "Volvo", "BMW"];

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
//Banana,Orange,Apple,Mango

cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];


const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>";
}


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
//Banana * Orange * Apple * Mango

// The pop() method removes the last element from an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();

// The push() method adds a new element to an array (at the end):
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

//The copyWithin() method copies array elements to another position in an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);


// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
//1,2,3,4,5,6


// The splice() method can be used to add new items to an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// Banana,Orange,Lemon,Kiwi,Apple,Mango

// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
//Orange,Apple,Mango

// The difference between the new toSpliced() method and the old splice() method is
// that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);


// The slice() method slices out a piece of an array into a new array:
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
// Banana,Orange,Lemon,Apple,Mango
// Orange,Lemon,Apple,Mango


// The method then selects elements from the start argument, and up to (but not including) the end argument.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
// Banana,Orange,Lemon,Apple,Mango
// Orange,Lemon


const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

array.indexOf(item, start)

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // is true

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

//The findIndex() method returns the index of the first array element that passes a test function.
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
    return value > 18;

}

// The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();


//By combining sort() and reverse(), you can sort an array in descending order:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();



//The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();


//Numeric Sort
// By default, the sort() function sorts values as strings.
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});


//Sorting an Array in Random Order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});



//Find Min or Max with sort()
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value




Math.min.apply(null, arr)
Math.max.apply(null, arr);

// JavaScript Array Minimum Method
function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}
//JavaScript Array Maximum Method
function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}




//Sorting Object Arrays

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

cars.sort(function(a, b){return a.year - b.year});
// Comparing string properties is a little more complex:

cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});



myArr.sort( (p1, p2) => {
    if (p1.price < p2.price) return -1;
    if (p1.price > p2.price) return 1;
    return 0;
});










//JavaScript Array forEach()

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt += value + "<br>";
}

//The map() method creates a new array by performing a function on each array element.
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
    return value * 2;
}



//The filter() method creates a new array with array elements that pass a test.
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}



// JavaScript Array reduce()
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
//  The reduce() method does not reduce the original array.
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}



//The every() method checks if all array values pass a test.
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}


//The some() method checks if some array values pass a test.
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}


//The Array.from() method returns an Array object from any object with a length property or any iterable object.
Array.from("ABCDEFG");



//The Array.keys() method returns an Array Iterator object with the keys of an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
    text += x + "<br>";
}


// Create an Array Iterator, and then iterate over the key/value pairs:

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
    document.getElementById("demo").innerHTML += x;
}

// method as a safe way to update elements in an array without altering the original array.
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");


// The ... operator expands an iterable (like an array) into more elements:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];


// JavaScript Array Const
// An array declared with const cannot be reassigned:
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR



// Const Block Scope
const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
    const cars = ["Toyota", "Volvo", "BMW"];
    // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"










