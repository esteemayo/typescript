"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Hello world';
console.log(message);
var isBeginner = true;
var total = 0;
var name = 'John';
var sentence = "\n  My name is ".concat(name, ",\n  I'm a beginner is TypeScript\n");
console.log(sentence);
var n = null;
var u = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
// array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
list1.push(4);
console.log(list1);
list2.splice(2, 1, 5);
console.log(list2);
// tuple
var person1 = ['John', 30];
console.log(person1);
// tuple array
var person2;
person2 = [
    ['John', 30],
    ['Mary', 28],
    ['Alice', 26],
];
console.log(person2);
// enum
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// any type
var randomValue = 10;
randomValue = true;
randomValue = 'John Doe';
function hasName(obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}
var myVariable = 10;
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable();
myVariable.toUpperCase();
// type assertion
var myVariable2 = 30;
myVariable2.toUpperCase();
// type inference
var a;
a = 10;
a = true;
var b = 20;
// union
var multiType;
multiType = 20;
multiType = true;
// functions
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
function plus1(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
plus1(3);
plus1(5, 7);
// default parameter
function plus2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
plus2(5, 10);
plus2(5);
