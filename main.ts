export {};

let message = 'Hello world';
console.log(message);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'John';

let sentence = `
  My name is ${name},
  I'm a beginner is TypeScript
`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

// let isNew: boolean = null;
// let myName: string = undefined;

// array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

list1.push(4);
console.log(list1);

list2.splice(2, 1, 5);
console.log(list2);

// tuple
let person1: [string, number] = ['John', 30];
console.log(person1);

// tuple array
let person2: [string, number][];
person2 = [
  ['John', 30],
  ['Mary', 28],
  ['Alice', 26],
];

console.log(person2);

// enum
enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

let c: Color = Color.Green;
console.log(c);

// any type
let randomValue: any = 10;
randomValue = true;
randomValue = 'John Doe';

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === 'object' && 'name' in obj;
}

let myVariable: any = 10;

if (hasName(myVariable)) {
  console.log(myVariable.name);
}

// myVariable();
// myVariable.toUpperCase();

// type assertion
let myVariable2: unknown = 30;
// (myVariable2 as string).toUpperCase();

// type inference
let a;
a = 10;
a = true;

let b = 20;

// union
let multiType: number | boolean;
multiType = 20;
multiType = true;

// functions
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(5, 10);

// optional parameter
function plus1(num1: number, num2?: number): number {
  if (num2) {
    return num1 + num2;
  }
  return num1;
}

plus1(3);
plus1(5, 7);

// default parameter
function plus2(num1: number, num2: number = 10): number {
  if (num2) {
    return num1 + num2;
  }
  return num1;
}

plus2(5, 10);
plus2(5);

// interfaces
interface Person {
  firstName: string;
  lastName: string;
}

function fullName(person: Person): void {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'John',
  lastName: 'Doe',
};

fullName(p);
