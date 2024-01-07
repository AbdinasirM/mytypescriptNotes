// Object types in TypeScript:

// Function to print the 'first' property of a person object
function printName(person: { first: string }): void {
    console.log(person.first);
}

// Example usage of the printName function with a person object
printName({ first: 'John' });

// Function to generate and return a random coordinate object with 'x' and 'y' properties
function makeRandomCoordinate(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() };
}

// Example usage of the makeRandomCoordinate function
makeRandomCoordinate();

// Note: In TypeScript, object types are specified using curly braces {} to define the shape of the object.
// For example, { first: string } indicates an object with a 'first' property of type string.
// The functions printName and makeRandomCoordinate demonstrate the usage of object types in function parameters and return types.
