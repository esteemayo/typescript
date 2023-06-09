"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// myVariable();
// myVariable.toUpperCase();
// type assertion
var myVariable2 = 30;
// (myVariable2 as string).toUpperCase();
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
// optional parameter
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
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'John',
    lastName: 'Doe',
};
fullName(p);
// class and access modifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
        this.name = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.name));
    };
    return Employee;
}());
var emp = new Employee('Emmanuel Adebayo');
console.log(emp);
emp.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        var _this = _super.call(this, managerName) || this;
        _this.managerName = managerName;
        return _this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delegating tasks');
    };
    return Manager;
}(Employee));
var m = new Manager('John Doe');
m.delegateWork();
m.greet();
console.log(m.name);
