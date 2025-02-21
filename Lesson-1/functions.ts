function greet(name: string): void {
  console.log(`Hello ${name}`);
}

greet('Emre'); // Output: Hello Emre

const greetTwo = (name: string): void => {
  console.log(`Hello ${name}`);
};

greetTwo('Alice'); // Output: Hello Alice

function greetOne(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old`;
}

console.log(greetOne('Bob', 25));
// Output: Hello Bob, you are 25 years old
