// TypeScript Literal Types and Union Types:

// Literal type assigns a specific value as the only valid option for a variable.
// Combining literal types with union types enhances their usefulness.

// Not useful examples of literal type alone:
let zero: 0 = 0;
zero = 9; // Error: Type '9' is not assignable to type '0'.

let hi: "hi" = "hi";
hi = "hello"; // Error: Type '"hello"' is not assignable to type '"hi"'.

// A practical example of literal type alone: assigning a unique company brand name
let brandName: "UBM" = "UBM";
console.log(brandName); // Works fine; no one else can use or assign a different brand name.

// Combining literal type with union type examples:
let mood: "Happy" | "Sad" = "Happy";
console.log(mood);

// Changing mood to something else:
mood = "Sad"; // Works fine
mood = "Not happy"; // Error: "Not happy" is not one of the literal types assigned to the 'mood' variable.

// Another example using literal types within a union type:
type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let day: DayOfWeek = "Friday"; // Works fine
let myDay: DayOfWeek = "FunDay"; // Error: 'FunDay' is not assignable to type 'DayOfWeek'.
