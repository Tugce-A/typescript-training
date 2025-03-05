// Define an enum called Direction with four possible values: Up, Down, Left, Right
enum Direction {
  Up = 'UPPER', // Represents the upward direction
  Down = 'DOWN', // Represents the downward direction
  Left = 'LEFT', // Represents the leftward direction
  Right = 'RIGHT', // Represents the rightward direction
}

// Declare a variable 'move' of type 'Direction' and initialize it with the 'Up' direction
let move: Direction = Direction.Up;

// Declare a constant variable 'apiResponded' and assign it the string value 'UPPER'
const apiResponded = 'UPPER';

// Check if the 'apiResponded' value matches the 'Up' direction from the Direction enum
if (apiResponded === Direction.Up) {
  // If the condition is true, update 'move' to be 'Up'
  move = Direction.Up;
}

// Log the value of 'move' to the console, which should be 'UPPER'
console.log(move); // Output: UPPER

// Define a generic function called 'identity' that takes a value of type T and returns the same type T
function identity<T>(value: T): T {
  return value; // Returns the input value unchanged
}

// Call the 'identity' function with a string value 'Hello' and log the result
console.log(identity<string>('Hello')); // Output: Hello

// Call the 'identity' function with a number value 100 and log the result
console.log(identity<number>(100)); // Output: 100

// Call the 'identity' function with a boolean value 'true' and log the result
console.log(identity<boolean>(true)); // Output: true

// Call the 'identity' function with an array of strings and log the result
console.log(identity<string[]>(['Hello', 'World'])); // Output: ['Hello', 'World']
