// Defining an object with specific properties
let user: { name: string; age: number } = {
  name: 'Alice',
  age: 30,
};

console.log(user.name); // Output: Alice

// Creating a mutable object
const person = {
  name: 'Emre',
  age: 30,
};

// Modifying a property of the object
person.name = 'Bob';

/* Reassigning the object is not allowed for const variables
person ={
    name: 'Charlie',
    age: 25
} */

// Freezing an object to prevent modifications
const userFreeze = Object.freeze(person);

/* Attempting to modify a frozen object will fail
userFreeze.name = 'Charlie'; */

// Using Object.values() to get values from an object
const userValues = Object.values(person);
console.log(`userValues => ${userValues}`); // Output: ['Bob', 30]

// Using Object.keys() to get keys from an object
const userKeys = Object.keys(person);
console.log(userKeys);
console.log(`userKeys => ${userKeys}`); // Output: ['name', 'age']

// Using Object.entries() to get key-value pairs from an object
const userEntries = Object.entries(person);
console.log(userEntries);

// Rest/Spread operator (ES9) to extract properties
const personOne = { name: 'Emre', age: 30, city: 'Istanbul' };
const { city, ...rest } = personOne;
console.log(rest); // Output: {name: 'Emre', age: 30}

// Optional Chaining (ES11) to safely access nested properties
const userOptionalChaining: { name: string; address?: { city: string } } = {
  name: 'Emre',
};

console.log(userOptionalChaining?.address?.city); // Output: undefined

// Nullish Coalescing Operator (ES11) to handle null or undefined values
const userNullishCoalescing: { name: string; age: number | null } = {
  name: 'Emre',
  age: null,
};

const ageOne = userNullishCoalescing.age ?? 25;
console.log(ageOne); // Output: 25

// Using String.replaceAll() (ES12) to replace all occurrences in a string
const text: string = 'JavaScript TypeScript JavaScript';
const newText = text.replaceAll('JavaScript', 'JS');
console.log(newText); // Output: JS TypeScript JS

// Demonstrating object reference behavior
let obj1 = { a: 1, b: 2 };
let obj2 = obj1;
/* Modifying obj2 also affects obj1 due to reference sharing
obj2.a = 6;
console.log(obj1.a); // Output: 6 */

// Creating a shallow copy using spread operator
let obj3 = { ...obj1 };
obj3.a = 10;
console.log(obj1.a); // Output: 6
console.log(obj3.a); // Output: 10
