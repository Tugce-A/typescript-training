// Define a class called 'Animal'
class Animal {
  name: string; // Property 'name' of type string

  // Constructor to initialize the 'name' property
  constructor(name: string) {
    this.name = name; // Assign the 'name' parameter to the 'name' property
  }

  // Method to simulate making a sound for the animal
  makeSound(): void {
    console.log('Generic Animal Sound'); // Default animal sound
  }
}

// Define a class called 'Dog' that extends 'Animal'
class Dog extends Animal {
  // Override the 'makeSound' method to simulate the sound a dog makes
  makeSound(): void {
    console.log('Hav Hav'); // Dog's sound
  }
}

// Create an instance of the 'Dog' class with the name 'Bobby'
const myDog = new Dog('Bobby');

// Call the 'makeSound' method of the 'myDog' instance, which calls the overridden method in 'Dog'
myDog.makeSound(); // Output: Hav Hav

// Log the 'name' property of the 'myDog' instance
console.log(myDog.name); // Output: Bobby
