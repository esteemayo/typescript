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

let isNew: boolean = null;
let myName: string = undefined;

// array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

list1.push(4);
console.log(list1);
