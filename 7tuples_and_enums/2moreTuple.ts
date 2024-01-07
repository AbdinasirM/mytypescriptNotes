// TypeScript Tuples:

// Tuples are a feature not found in JavaScript. They represent arrays with a fixed length and a specific order of types.

// Example:
type HttpStatusCode = [number, string];

let goodResponseCode: HttpStatusCode = [200, "OK"]; 
// This assignment works because it adheres to the tuple's requirement of size two, with the first item being a number and the second item being a string.


let myTuple: [number, string] = [42, "hello"];

// This will result in a TypeScript error:
// myTuple.push(true); // Error: Property 'push' does not exist on type '[number, string]'.

// You cannot push to a tuple because its size is fixed, and TypeScript enforces this constraint.
