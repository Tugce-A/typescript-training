// Define a type alias 'UserType' with two properties: 'name' (string) and 'age' (number)
type UserType = {
  name: string; // 'name' is a string representing the user's name
  age: number; // 'age' is a number representing the user's age
};

// Create an object 'user2' that adheres to the 'UserType' type
const user2: UserType = {
  name: 'Alice', // Assign 'Alice' to the 'name' property
  age: 30, // Assign 30 to the 'age' property
};

// Define a type alias 'Status' that can only have one of three possible string values: 'success', 'error', or 'loading'
type Status = 'success' | 'error' | 'loading';

// Define a type alias 'AnimalType' with a single property 'name' of type string
type AnimalType = {
  name: string; // 'name' is a string representing the animal's name
};

// Define a type alias 'Cat' that extends 'AnimalType' and adds an additional property 'breed' of type string
type Cat = AnimalType & {
  breed: string; // 'breed' is a string representing the cat's breed
};

// Create an object 'myCat' that adheres to the 'Cat' type
const myCat: Cat = {
  name: 'Mia', // Assign 'Mia' to the 'name' property
  breed: 'Siamese', // Assign 'Siamese' to the 'breed' property
};
