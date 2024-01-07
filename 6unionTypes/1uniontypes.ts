// Union Types in TypeScript: 
// Union types allow us to assign multiple data types to a single variable.

// Example without union type:
let age: number = 23;
age = 36; // This works fine
// age = "34"; // This will throw an error because the age variable can only hold a number type value

// Example with union type:
let height: number | string = 10;
height = 12;
height = "12 feet"; // This works because the union type allows us to assign a number or string type to the variable height

// Note: Use union types judiciously; it's often better to be specific with types to enhance code clarity and prevent unintended behavior.
