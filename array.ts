Array.prototype.includes():
/**
 * Array
 * */

// declare an array

const list:number[] = [1,2,3];

const categories: Array<string> = ['Sport', 'IT', 'Car'];

console.log('list');
list.forEach((num) =>
    console.log(num.toFixed(2))
);

console.log('categries');
categories.forEach((str) =>
    console.log(str.includes('a'))
);

// convert mang tu dang nay sang dang khac
const listSquare = list.map(num => num * num);
console.log(listSquare);
// output [1,4,9]

// loc cac phan tu thoa man
const result = categories.filter(str => str.length > 2)
console.log(result);
// output ['Sport','Car']


/**
 * Tuple
 * */

// Declare a tuple type
let x:[string, number];
// Initialize it
x = ["Hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "Hello"]; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1));
// Error, Property 'substr' does not exist on type 'number'

x[3] = "wolrd";
// OK, 'string' can be assigned to 'string | number'
x[5] = 100.25;
console.log(x[5].toString());
// OK, 'string' and 'number' both have 'toString'

// x[6] = true; // Error, 'boolean' isn't 'string | number'