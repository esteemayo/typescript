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

let myVariable: any = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
