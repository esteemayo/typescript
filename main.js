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
var isNew = null;
var myName = undefined;
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
console.log(person2.flat());
