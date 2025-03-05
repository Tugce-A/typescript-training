// Define an interface called 'User' with three properties: 'name', 'age', and 'id'.
// 'id' is a readonly property, meaning it cannot be changed after initialization.
interface User {
  name: string; // 'name' is a string representing the user's name
  age: number; // 'age' is a number representing the user's age
  readonly id: number; // 'id' is a readonly number representing the user's unique identifier
}

// Create an object 'user3' that adheres to the 'User' interface
const user3: User = {
  name: 'Alice', // Assign 'Alice' to the 'name' property
  age: 30, // Assign 30 to the 'age' property
  id: 1, // Assign 1 to the 'id' property (readonly)
};

// Uncommenting the line below will cause an error because 'id' is readonly
// user3.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

// Define an interface called 'Vehicle' with three properties: 'brand', 'speed', and 'drive' method.
interface Vehicle {
  brand: string; // 'brand' is a string representing the vehicle's brand
  speed: number; // 'speed' is a number representing the vehicle's speed in km/hr
  drive(): void; // 'drive' is a method that doesn't return anything (void)
}

// Define a class 'Bike' that implements the 'Vehicle' interface
class Bike implements Vehicle {
  brand: string; // Declare a property 'brand' to hold the bike's brand
  speed: number; // Declare a property 'speed' to hold the bike's speed

  // Constructor to initialize the 'brand' and 'speed' properties
  constructor(brand: string, speed: number) {
    this.brand = brand; // Set the 'brand' property
    this.speed = speed; // Set the 'speed' property
  }

  // Implement the 'drive' method from the 'Vehicle' interface
  drive(): void {
    // Log a message indicating the bike is driving at a specific speed
    console.log(`${this.brand} is driving at ${this.speed} km/hr`);
  }
}

// The 'Bike' class now has the 'brand', 'speed' properties, and the 'drive' method from the 'Vehicle' interface.
