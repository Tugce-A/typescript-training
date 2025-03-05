// Creating an array of strings
let stringList: Array<string> = ['Alice', 'Bob', 'Charlie'];

// Creating an array of numbers
let arrayMethodFirstItems: number[] = [10, 20, 30];

// Adding an element at the end of the array
arrayMethodFirstItems.push(40);
console.log(arrayMethodFirstItems); // Output: [10, 20, 30, 40]

// Removing the last element from the array
arrayMethodFirstItems.pop();
console.log(arrayMethodFirstItems); // Output: [10, 20, 30]

// Removing the first element from the array
arrayMethodFirstItems.shift();
console.log(arrayMethodFirstItems); // Output: [20, 30]

// Adding an element at the beginning of the array
arrayMethodFirstItems.unshift(10);
console.log(arrayMethodFirstItems); // Output: [10, 20, 30]

// Using splice to insert an element at a specific index
/* arrayMethodFirstItems.splice(1, 0, 15);
console.log(arrayMethodFirstItems); // Output: [10, 15, 20, 30] */

// Using slice to extract a portion of the array
let arrayMethodSecondItems = [10, 20, 30, 40, 50];
const slicedItems = arrayMethodSecondItems.slice(1, 3);
console.log(slicedItems); // Output: [20, 30]

// Finding the first element greater than 25
const findFirstItem = arrayMethodSecondItems.find((item) => item > 25);
console.log(`Find First Item: ${findFirstItem}`); // Output: 30

// Finding the index of the first element greater than 25
const findFirstIndex = arrayMethodSecondItems.findIndex((item) => item > 25);
console.log(`Find First Index: ${findFirstIndex}`); // Output: 2

// Using map to square each element in the array
let numberList: number[] = [1, 2, 3, 4, 5];
const squared = numberList.map((number) => number * number);
console.log(squared); // Output: [1, 4, 9, 16, 25]

/* Alternative way to square numbers using a loop
const squared = []
for(let number of numberList){
  squared.push(number * number);
}
console.log(squared); // Output: [1, 4, 9, 16, 25] */

// Filtering even numbers from the array
const evenNumbers = numberList.filter((number) => number % 2 === 0);
/* Alternative way to filter even numbers
const evenNumbers = [];
for (let number of numberList) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
} */
console.log(evenNumbers); // Output: [2, 4]

// Using reduce to sum up all numbers in the array
const sum = numberList.reduce((total, number) => total + number, 0);
console.log(`Sum: ${sum}`); // Output: 15

// Checking if the array includes certain numbers
const includesNumbers: number[] = [1, 2, 3, 4, 5];
const includesResult = includesNumbers.includes(3);
const nonIncludesResult = includesNumbers.includes(7);
console.log(includesResult); // Output: true
console.log(nonIncludesResult); // Output: false

// Flattening a nested array (ES10 feature)
const nestedArray = [1, [2, 3, [4, 5]], 6];
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

// Using flatMap to split words into an array (ES10 feature)
const words: string[] = ['Hello World', 'How are you'];
const wordsArray = words.flatMap((word) => word.split(' '));
console.log(wordsArray); // Output: ['Hello', 'World', 'How', 'are', 'you']

// Finding the last even number in the array (ES14 feature)
const numbersArrayES14 = [1, 2, 3, 4, 5, 6];
const lastEven = numbersArrayES14.findLast((number) => number % 2 === 0);
console.log(`Last Even: ${lastEven}`); // Output: 6

// Finding the last even number's index (ES14 feature)
const lastEvenIndex = numbersArrayES14.findLastIndex(
  (number) => number % 2 === 0
);
console.log(`Last Even Index: ${lastEvenIndex}`); // Output: 5
