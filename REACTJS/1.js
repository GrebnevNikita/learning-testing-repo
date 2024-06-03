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
root.render(<Hello />);




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







