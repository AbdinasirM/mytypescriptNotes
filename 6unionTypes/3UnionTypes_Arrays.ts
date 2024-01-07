// TypeScript Union Types with Arrays:

// Union types with arrays provide a way to define arrays that can hold elements of multiple specified types.

// Example 1: Combining number and string types in an array
let things: (number | string)[] = [1, 2, 3, "abdi"];
console.log(things);

// Example 2: Union type with boolean and string in an array
let flags: (boolean | string)[] = [true, "false", false, "true"];
console.log(flags);

// Example 3: Union type with objects and string in an array
let mixedData: (object | string)[] = [{ key: "value" }, "text", { count: 42 }, "more text"];
console.log(mixedData);

// Example 4: Union type with custom types in an array
type Animal = "Dog" | "Cat" | "Bird";
let pets: Animal[] = ["Dog", "Cat", "Bird", "Lion"]; // Error: 'Lion' is not a valid Animal type
console.log(pets);

// Note: Union types offer flexibility in handling arrays with diverse data types, 
// but it's crucial to ensure that the array elements conform to the specified union types.
