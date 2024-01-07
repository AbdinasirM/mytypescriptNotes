// TypeScript Interfaces:

// Interfaces and "type" in TypeScript are similar but not identical. Interfaces specifically describe the shape of objects.

// Example using "type":
type PersonType = {
    name: string,
    age: number
};

const pt1: PersonType = {
    name: "John",
    age: 1123
};

console.log(`Hello, ${pt1.name}! You are ${pt1.age} years old.`);

// Example using an interface (interfaces are exclusive to objects):
interface Person {
    name: string,
    age: number
}

const p1: Person = {
    name: "Abdinasir",
    age: 221
};

console.log(`Hello, ${p1.name}! You are ${p1.age} years old.`);

// Note: Interfaces provide a way to define the structure of objects, enhancing code readability and ensuring consistent shapes for similar entities.
