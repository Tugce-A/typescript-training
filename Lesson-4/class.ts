// Define a class called 'Person'
class Person {
  name: string; // Property to store the person's name
  age: number; // Property to store the person's age

  // Constructor to initialize 'name' and 'age' properties when creating an instance of 'Person'
  constructor(name: string, age: number) {
    this.name = name; // Assign the 'name' parameter to the 'name' property
    this.age = age; // Assign the 'age' parameter to the 'age' property
  }

  // Method 'introduce' to introduce the person with a greeting message
  introduce(): void {
    // Log a message introducing the person using their 'name' and 'age'
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create an instance of the 'Person' class with the name 'Alice' and age 30
const person1 = new Person('Alice', 30);

// Call the 'introduce' method of 'person1' to introduce them
person1.introduce(); // Output: Hi, I'm Alice and I'm 30
