"use strict";
// Basic types
let id = 5;
let company = 'LoganDev';
let isLoggedIn = true;
let x = 'Hello';
let ids = [1, 2, 3];
ids.push(4);
// Tuple
let person = [1, 'Logan', true];
// Tuple Array
let people;
people = [
    [1, 'Logan', true],
    [2, 'Turkey', true],
    [3, 'Mary', false],
];
// Union
let union = 30;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Logan',
    age: 30,
};
// Type Assertion
let assertion = 1;
// let customerID = <number>assertion;
let customerID = assertion;
// Function
function addNum(a, b) {
    return a + b;
}
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Logan',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Logan Brock');
const mike = new Person(2, 'Turkey Dog');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Logan', 'Software Engineer');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'John', 'Jill']);
numArray.push(1); // Throws error
