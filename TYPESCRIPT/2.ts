

//There are three main visibility modifiers in TypeScript.
//
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below



class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person = new Person("Jane");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private




// Parameter Properties
// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.

class Person {
    // name is a private member variable
    public constructor(private name: string) {}

    public getName(): string {
        return this.name;
    }
}

const person = new Person("Jane");
console.log(person.getName());



// Readonly
// Similar to arrays, the readonly keyword can prevent class members from being changed.

class Person {
    private readonly name: string;

    public constructor(name: string) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person = new Person("Jane");
console.log(person.getName());


// Inheritance: Implements
// Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.

interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }
}


//A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {



// Inheritance: Extends
// Classes can extend each other through the extends keyword. A class can only extends one other class.

interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }
    // getArea gets inherited from Rectangle
}









// Override
// When a class extends another class, it can replace the members of the parent class with the same name.
    // Newer versions of TypeScript allow explicitly marking this with the override keyword.

interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }

    // this toString replaces the toString from Rectangle
    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}

//By default the override keyword is optional when overriding a method,
// and only helps to prevent accidentally overriding a method that does not exist. Use the setting noImplicitOverride to force it to be used when overriding.




// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for
// other classes without having to implement all the members. This is done by using the abstract keyword.
// Members that are left unimplemented also use the abstract keyword.
//Abstract classes cannot be directly instantiated, as they do not have all their members implemented.

abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

class Rectangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}





// Partial
// Partial changes all the properties in an object to be optional.

interface Point {
    x: number;
    y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;


// Required
// Required changes all the properties in an object to be required.
interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};


// Record
// Record is a shortcut to defining an object type with a specific key type and value type.
const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};



// keyof is a keyword in TypeScript which is used to extract the key type from an object type.
//     keyof with explicit keys
// When used on an object type with explicit keys, keyof creates a union type with those keys.

interface Person2 {
    name: string;
    age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person2, property: keyof Person2) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person2 = {
    name: "Max",
    age: 27
};
printPersonProperty(person2, "name"); // Printing person property name: "Max"


// keyof with index signatures
// keyof can also be used with index signatures to extract the index type.

    type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
    return { [property]: value };
}


// TypeScript has a powerful system to deal with null or undefined values.
// By default null and undefined handling is disabled, and can be enabled by setting strictNullChecks to true.
// The rest of this page applies for when strictNullChecks is enabled.

// Types
// null and undefined are primitive types and can be used like other types, such as string.
let value: string | undefined | null = null;
value = 'hello';
value = undefined;

// When strictNullChecks is enabled, TypeScript requires values to be set unless undefined is explicitly added to the type.


// Optional Chaining
// Optional Chaining is a JavaScript feature that works well with TypeScript's null handling. It allows accessing properties on an object, that may or may not exist, with a compact syntax. It can be used with the ?. operator when accessing properties.

interface House {
    sqft: number;
    yard?: {
        sqft: number;
    };
}
function printYardSize(house: House) {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    } else {
        console.log(`Yard is ${yardSize} sqft`);
    }
}

let home: House = {
    sqft: 500
};

printYardSize(home); // Prints 'No yard'




// Nullish Coalescence
// Nullish Coalescence is another JavaScript feature that also works well with TypeScript's null handling. It allows writing expressions that have a fallback specifically when dealing with null or undefined. This is useful when other falsy values can occur in the expression but are still valid. It can be used with the ?? operator in an expression, similar to using the && operator.

function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}

printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'




// Null Assertion
// TypeScript's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility of being null or undefined. An easy way to do this is to use casting, but TypeScript also provides the ! operator as a convenient shortcut.

function getValue(): string | undefined {
    return 'hello';
}
let value = getValue();
console.log('value length: ' + value!.length);


// Array bounds handling
// Even with strictNullChecks enabled, by default TypeScript will assume array access will never return undefined (unless undefined is part of the array type).
// The config noUncheckedIndexedAccess can be used to change this behavior.
let array: number[] = [1, 2, 3];
let value = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`
























