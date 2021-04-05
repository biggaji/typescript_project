// The primitives string, number, boolean

// The type names String, Number, and Boolean (starting with capital letters) are legal, but refer to some special built-in types that will very rarely appear in your code. Always use string, number, or boolean for types.

// Array

let nameOfStudents: string[];

nameOfStudents = ["Tobiloba", "Heritage", "Ajibade"];

// To specify the type of array like [1,2,3], you can use the syntax 'number[]', this works with any type e.g (string[] (i.e. this means an array of strings), and so on). It may be also be written as Array<string>.

// any
// typescript has a special datatype 'any', which you can use whenever you do not have a particular value to cause typechecking errors

// When a value is of type any, you can access any properties of it.

// noImplicitAny
// When you don’t specify a type, and Typescript can’t infer it from context, the compiler will typically default to any.


// Functions

// Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions.

// Parameter type annotations

// When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:

function outputMessage(message: string) {
    return console.log(`${message}`);
}

outputMessage("Am a legend in the making");

// return type annotations 

// Return type is always added after the parameter list

function getRandomNumber(): number {
    // returns random numbers between 1 and 10
    return Math.floor(Math.random() * 11);
}

getRandomNumber();

// Object type

// This refers to any javascript with properties.

// To define an object type, we declare its properties and their type.
// You can use , or ; to seperate properties.
// if types are not specified on the properties, it would be set to any!

function ObjType(obj: { firstname: string, lastname: string }) {
    // ^ this is an object type
    return obj;
}

// Optional properties
// Object type could also specify that some properties are optional. To do this, you add a ? after the property name.

type Man = {
    color: string;
    likeSex?: boolean
}

// In JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime error. Because of this, when you read from an optional property, you’ll have to check for undefined before using it.

function printDetails(data: Man) {
    // always check if optional properties are not undefined
    if (data.likeSex !== undefined) {
        if (data.likeSex) {
            return console.log((`He is ${data.color} and likes sex too.`))
        }
        return console.log("He is " + data.color + " and does not like sex.")
    }
    return console.log(`He is ${data.color}`);
}

printDetails({ color: "Yellow", likeSex: true });


// Union types

// TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. i.e. combining two or more different types together : string | number, representing values that maybe any of those types.
// Each of these types are reffered to as union members.

// Exp

function printValue(value: string | number) {
    console.log(value);
}

// The value args must be either a string or a number, any other types are not accepted.
printValue(90);

// Working with union types

// Typescript will only allow you to do things with union if that thing is valid for every member. e.g you can't use methods available on string on a number. "Ko le Work", then "O wrong nau";

// The solution is to narrow down the union with code, e.g. use typeof to check the value type entered.

// e.g

function strOrNum(input: string | number) {
    if (typeof input === 'string') {
        // it is a string and can use string methods here
    } else {
        // it is a number.
    }
}

// Another thing to note is that, if each members has a similar method, you want to use on both, no need to narrow the code, can just use it directly.

// e.g slice method works both on string and array

function partsOfInput(input: string | number[]) {
    return input.slice(0, 3);
}

// to check for type of array, use Array.isArray(arr);

// Type aliases

// This allows us to name and resuse types. A type alias is exactly that - a name for any type.

// exm - syntax

type numOrStr = number | string;

// can also be used to name any type, even obj types

type userObj = {
    firstname: string,
    lastname: string
}

function greetUser(user: userObj): string {
    if (typeof user !== 'object') {
        return "A user must be an Object type!";
    }
    return `Hello ${user.firstname} ${user.lastname}, welcome to typescript!`;
}

// When you use aliases, it just as when you implicily typed those types.

// Interface 

// An interface declaration is another way to name an OBJECT TYPE.
// An interface should start with a capital letter

// e.g 

interface User {
    firstname: string,
    lastname: string,
    age: number
}

function useDataWithAge(user: User): {} {
    return {
        firstname: user.firstname,
        lastname: user.lastname,
        age: user.age
    }
}

// Always use 'interface' to create object type instead of 'type';


// Type assertion

// Sometimes you will have information about the type of a value that TypeScript can’t know about.

// For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLDivElement with a given className.

// In this situation, you can use a type assertion to specify a more specific type:

const firstDiv = document.getElementsByClassName("container")[0] as HTMLDivElement;

// Literal Types

// In addition to the general types string and number, we can refer to specific strings and numbers in type positions.

// One way to think about this is to consider how JavaScript comes with different ways to declare a variable.Both var and let allow for changing what is held inside the variable, and const does not.This is reflected in how TypeScript creates types for literals.

// It’s not much use to have a variable that can only have one value!

// But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

type alignment = "left" | "right" | "bottom" | "center";
function alignText(text: string, alignTo?: alignment): {} {
    if (alignTo !== undefined) {
        if (typeof text !== 'string' && typeof alignTo !== 'string') {
            return {
                error: "Both 'text' and 'alignTo' must be of type string"
            }
        }
        return {
            text: text,
            alignTo: alignTo
        }
    }
    return {
        text: text
    }
}

// Literal inference
// When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later.For example, if you wrote code like this:

let someCondition: any;
const obj = { counter: 0 };
if (someCondition) {
    obj.counter = 1;
}

// null and undefined

// JavaScript has two primitive values used to signal absent or uninitialized value: null and undefined.

// Non-null assertion Operator (Postfix !)

// TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined.

function liveDangerously(x?: number | undefined) {
    // No error
    console.log(x!.toFixed());
}

// ust like other type assertions, this doesn’t change the runtime behavior of your code, so it’s important to only use ! when you know that the value can’t be null or undefined.

// Enums 
// Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants. Unlike most TypeScript features, this is not a type-level addition to JavaScript but something added to the language and runtime. Because of this, it’s a feature which you should know exists, but maybe hold off on using unless you are sure. 