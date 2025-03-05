// Hoisting behavior with var (undefined before initialization)
/* console.log(x);
var x = 5;
console.log(x); */

// Hoisting behavior with let (ReferenceError before initialization)
/* console.log(y);
let y = 10;
console.log(y); */

// Hoisting behavior with const (ReferenceError before initialization)
/* console.log(z);
const z = 10;
console.log(z); */

// Function expression hoisting behavior
// Function expressions are not hoisted like function declarations
// This will result in a TypeError because greetFunction is undefined at the time of invocation
greetFunction();

var greetFunction = function () {
  console.log('Hello World');
};
