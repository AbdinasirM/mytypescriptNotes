// TypeScript Tuples:

// Tuples are a feature not present in JavaScript. They are specialized arrays with a fixed length and a specific order of types.
// Example:
let color: [number, number, number]; // An array with a fixed size of three, exclusively holding three numbers.

color = [255, 0, 255]; // This assignment works as it adheres to the tuple's fixed size and type order.

color = [255, 255, 255, 225]; // Error: The size limit of the tuple is three; this assignment will not work.

// Note: Tuples provide a way to ensure a specific structure for arrays by defining the length and type of each element.
