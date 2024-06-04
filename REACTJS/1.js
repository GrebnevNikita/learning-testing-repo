// React is a JavaScript library for building user interfaces.
// React is used to build single-page applications.
// React allows us to create reusable UI components.


import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
    return <h1>Hello World!</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello/>);


//What is React?
// React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
//
// React is a tool for building UI components.

//How does React Work?
// React creates a VIRTUAL DOM in memory.
//
// Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
//
// React only changes what needs to be changed!
//
// React finds out what changes have been made, and changes only what needs to be changed.
//
// You will learn the various aspects of how React does this in the rest of this tutorial.


//React uses ES6

// Classes
// ES6 introduced classes.

// A class is a type of function,
// but instead of using the keyword function to initiate it,
// we use the keyword class, and the properties are assigned inside a constructor() method.

class Car {
    constructor(name) {
        this.brand = name;
    }
}

const mycar = new Car("Ford");

// Notice the case of the class name. We have begun the name, "Car", with an uppercase character. This is a standard naming convention for classes.

// Note: The constructor function is called automatically when the object is initialized.


//Method in Classes
class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}

const mycar = new Car("Ford");
mycar.present();


// Class Inheritance
// To create a class inheritance, use the extends keyword.

class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }

    show() {
        return this.present() + ', it is a ' + this.model
    }
}

const mycar = new Model("Ford", "Mustang");
mycar.show();


//Arrow Functions
// Arrow functions allow us to write shorter function syntax:

hello = function () {
    return "Hello World!";
}
//with Arrow Function:
hello = () => {
    return "Hello World!";
}
// Arrow Functions Return Value by Default:

hello = () => "Hello World!";

// Arrow Function With Parameters:

hello = (val) => "Hello " + val;

hello = val => "Hello " + val;


//What About this?
// The handling of this is also different in arrow functions compared to regular functions.
// In short, with arrow functions there is no binding of this.
// In regular functions the this keyword represented the object that called the function,
// which could be the window, the document, a button or whatever.
// With arrow functions, the this keyword always represents the object that defined the arrow function.
// Let us take a look at two examples to understand the difference.
// Both examples call a method twice, first when the page loads, and once again when the user clicks a button.
// The first example uses a regular function, and the second example uses an arrow function.
// The result shows that the first example returns two
// different objects (window and button), and the second example returns the Header object twice.


// With a regular function, this represents the object that called the function:

class Header {
    constructor() {
        this.color = "Red";
    }

//Regular function:
    changeColor = function () {
        document.getElementById("demo").innerHTML += this;
    }
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);


// With an arrow function, this represents the Header object no matter who called the function:

class Header {
    constructor() {
        this.color = "Red";
    }

//Arrow function:
    changeColor = () => {
        document.getElementById("demo").innerHTML += this;
    }
}

const myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);


// If you use var outside of a function, it belongs to the global scope.
// If you use var inside of a function, it belongs to that function.
// If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.
// var has a function scope, not a block scope.


// let is the block scoped version of var, and is limited to the block (or expression) where it is defined.
// If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.
// let has a block scope.


// const is a variable that once it has been created, its value can never change.
// const has a block scope.


// Because of this you can NOT:
// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:
// Change the elements of constant array
// Change the properties of constant object


// Destructing Arrays
// Here is the old way of assigning array items to a variable:
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
// Here is the new way of assigning array items to a variable:

const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;


// Spread Operator
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.


const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

// Assign the first and second items from numbers to variables and put the rest in an array:

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;


// Combine these two objects:

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}


// Named Exports
// You can create named exports two ways. In-line individually, or all at once at the bottom.
// In-line individually:


export const name = "Jesse"
export const age = 40
// All at once at the bottom:

const name = "Jesse"
const age = 40
export {name, age}


// Import named exports from the file person.js:
import {name, age} from "./person.js";

// Import a default export from the file message.js:
import message from "./message.js";


// if (authenticated) {
//     renderApp();
// } else {
//     renderLogin();
// }

// Here is the same example using a ternary operator:
// With Ternary

// authenticated ? renderApp() : renderLogin();


//React's goal is in many ways to render HTML in a web page.
// React renders HTML to the web page by using a function called createRoot() and its method render().
// The createRoot Function
// The createRoot() function takes one argument, an HTML element.
// The purpose of the function is to define the HTML element where a React component should be displayed.
// The render Method
// The render() method is then called to define the React component that should be rendered.
// But render where?
// There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.
// You'll notice a single <div> in the body of this file. This is where our React application will be rendered.


// Display a paragraph inside an element with the id of "root":

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);
// The result is displayed in the <div id="root"> element:

// <body>
// <div id="root"></div>
// </body>


// The HTML Code
// The HTML code in this tutorial uses JSX which allows you to write HTML tags inside the JavaScript code:
// Create a variable that contains HTML code and display it in the "root" node:

const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myelement);


//What is JSX?
// JSX stands for JavaScript XML.
// JSX allows us to write HTML in React.
// JSX makes it easier to write and add HTML in React.

//Coding JSX
// JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
// JSX converts HTML tags into react elements.
// You are not required to use JSX, but JSX makes it easier to write React applications.
// Here are two examples. The first uses JSX and the second does not:


// JSX:

const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);


// Without JSX:
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);


// Expressions in JSX
// With JSX you can write expressions inside curly braces { }.
// The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:
// Execute the expression 5 + 5:

const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

// Inserting a Large Block of HTML
// To write HTML on multiple lines, put the HTML inside parentheses:
// Create a list with three list items:
const myElement = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
);

// One Top Level Element
// The HTML code must be wrapped in ONE top level element.
// So if you like to write two paragraphs, you must put them inside a parent element, like a div element.
// Wrap two paragraphs inside one DIV element:

const myElement = (
    <div>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </div>
);


//Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.
//
// A fragment looks like an empty HTML tag: <></>.
const myElement = (
    <>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </>
);

// Close empty elements with />

const myElement = <input type="text"/>;


// Attribute class = className
// The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.
// Use attribute className instead.
// JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.
// Use attribute className instead of class in JSX:

const myElement = <h1 className="myclass">Hello World</h1>;


//React supports if statements, but not inside JSX.
const x = 5;
let text = "Goodbye";
if (x < 10) {
    text = "Hello";
}

const myElement = <h1>{text}</h1>;


// Write "Hello" if x is less than 10, otherwise "Goodbye":
const x = 5;
const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
// Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.


// Components are like functions that return HTML elements.
// React Components
// Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
// Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

// When creating a React component, the component's name MUST start with an upper case letter.
// Class Component
// A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
// The component also requires a render() method, this method returns HTML.

class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}

// Create a Function component called Car
// Here is the same example as above, but created using a Function component instead.
// A Function component also returns HTML, and behaves much the same way as a Class component,
// but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.

function Car() {
    return <h2>Hi, I am a Car!</h2>;
}


// Now your React application has a component called Car, which returns an <h2> element.
//  use this component in your application, use similar syntax as normal HTML: <Car />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car/>);


//Props
// Components can be passed as props, which stands for properties.
// Props are like function arguments, and you send them into the component as attributes.
// You will learn more about props in the next chapter.


function Car(props) {
    return <h2>I am a {props.color} Car!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);


//Components in Components


// Use the Car component inside the Garage component:

function Car() {
    return <h2>I am a Car!</h2>;
}

function Garage() {
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <Car/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);


// Components in Files
// React is all about re-using code, and it is recommended to split your components into separate files.
// To do that, create a new file with a .js file extension and put the code inside it:
// Note that the filename must start with an uppercase character.


// This is the new file, we named it "Car.js":

function Car() {
    return <h2>Hi, I am a Car!</h2>;
}

export default Car;


// Now we import the "Car.js" file in the application, and we can use the Car component as if it was created here.

import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car/>);


//Before React 16.8, Class components were the only way to track state and lifecycle on a React component. Function components were considered "state-less".
// With the addition of Hooks, Function components are now almost equivalent to Class components. The differences are so minor that you will probably never need to use a Class component in React.
// Even though Function components are preferred, there are no current plans on removing Class components from React.
// This section will give you an overview of how to use Class components in React.
// Feel free to skip this section, and use Function Components instead.


// React Props
// Create a variable named carName and send it to the Car component:

function Car(props) {
    return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
    const carName = "Ford";
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand={carName}/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);


// Create an object named carInfo and send it to the Car component:

function Car(props) {
    return <h2>I am a {props.brand.model}!</h2>;
}

function Garage() {
    const carInfo = {name: "Ford", model: "Mustang"};
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand={carInfo}/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage/>);

//Note: React Props are read-only! You will get an error if you try to change their value.



//Just like HTML DOM events, React can perform actions based on user events.
// React has the same events as HTML: click, change, mouseover etc.
// Adding Events
// React events are written in camelCase syntax:
// onClick instead of onclick.
// React event handlers are written inside curly braces:
// onClick={shoot}  instead of onclick="shoot()".

// React:Get your own React.js Server
<button onClick={shoot}>Take the Shot!</button>
// HTML:
<button onclick="shoot()">Take the Shot!</button>


// Put the shoot function inside the Football component:
    function Football() {
        const shoot = () => {
            alert("Great Shot!");
        }

        return (
            <button onClick={shoot}>Take the shot!</button>
        );
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);





// Passing Arguments
// To pass an argument to an event handler, use an arrow function.
// Send "Goal!" as a parameter to the shoot function, using arrow function:

function Football() {
    const shoot = (a) => {
        alert(a);
    }

    return (
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);








































