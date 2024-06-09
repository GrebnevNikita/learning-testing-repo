// TypeScript is JavaScript with added syntax for types.
// This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
// TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.
// Why should I use TypeScript?
// JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.
// In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.
// TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
// For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.
// TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.



// Explicit Type
// Explicit - writing out the type:
let firstName: string = "Dylan";


// Implicit Type
// Implicit - TypeScript will "guess" the type, based on the assigned value:

let firstName2 = "Dylan";


//There are three main primitives in JavaScript and TypeScript.
//
// boolean - true or false values
// number - whole numbers and floating point values
// string - text values like "TypeScript Rocks"
// There are also 2 less common primitives used in later versions of Javascript and TypeScript.
//
// bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
// symbol are used to create a globally unique identifier.




// any is a type that disables type checking and effectively allows all types to be used.

// Example without anyGet your own TypeScript Server
let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.


// Example with any
    let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type



// Type: unknown
// unknown is a similar, but safer alternative to any.

    // TypeScript will prevent unknown types from being used, as shown in the below example:

    let w: unknown = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
    (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting


// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
// Casting is when we use the "as" keyword to say property or variable is of the casted type.





// Type: never
// never effectively throws an error whenever it is defined.

 let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
// never is rarely used, especially by itself, its primary use is in advanced generics.




//TypeScript Arrays

const names: string[] = [];
names.push("Dylan"); // no error
names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Readonly
// The readonly keyword can prevent arrays from being changed.
const names: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// // try removing the readonly modifier and see if it works?



// TypeScript can guess the type of an array if it has values.

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error





//Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// define our tuple
let ourTuple: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple = [false, 'Coding God was mistaken', 5];





// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values:
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);


// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');




// TypeScript Object Types
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};



// TypeScript can guess the type of an array if it has values.
const car = {
    type: "Toyota",
};
car.type = "Ford"; // no error
car.type = 2; // Error: Type 'number' is not assignable to type 'string'.


// Optional Properties
// Optional properties are properties that don't have to be defined in the object definition.
// Example without an optional property
const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car.mileage = 2000;

// Example with an optional property
const car: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car.mileage = 2000;



// Index Signatures
// Index signatures can be used for objects without a defined list of properties.

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.





// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.




// By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum CardinalDirections {
    North,
    East,
    South,
    West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.






// You can set the value of the first numeric enum and have it auto increment from that:
enum CardinalDirections {
    North = 1,
    East,
    South,
    West
}
// logs 1
console.log(CardinalDirections.North);
// logs 4
console.log(CardinalDirections.West);



// You can assign unique number values for each enum value. Then the values will not incremented automatically:

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);



// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.

enum CardinalDirections2 {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
// logs "North"
console.log(CardinalDirections2.North);
// logs "West"
console.log(CardinalDirections2.West);


// Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.








// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.


type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};





// Interfaces
// Interfaces are similar to type aliases, except they only apply to object types.

interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};

interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};






// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.


// Union | (OR)
// Using the | we are saying our parameter is a string or number:

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');






// TypeScript Functions
// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
}
//If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.


//The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
    console.log('Hello!');
}


// Parameters
// Function parameters are typed with a similar syntax as variable declarations.

function multiply(a: number, b: number) {
    return a * b;
}




// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}


// Default Parameters
// For parameters with default values, the default value goes after the type annotation:
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}

// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}


// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}

// Type Alias
// Function types can be specified separately from functions with type aliases.
//     These types are written similarly to arrow functions, read more about arrow functions here.

type Negate = (value: number) => number;
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

























