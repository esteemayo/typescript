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
var myVariable = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
