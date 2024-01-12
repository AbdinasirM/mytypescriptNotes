// Built-in array generics
const nums: Array<number> = [];
const colors: Array<string> = [];

// Creating a generic type function named 'identity'
function identity<Type>(item: Type): Type {
    return item;
}

// Interface representing a Person
interface Person {
    name: string;
    age: number;
}

// Examples of using the 'identity' function with different types
console.log(identity<number>(78));  // Output: 78
console.log(identity<string>("Hello world!"));  // Output: Hello world!
console.log(identity<Person>({ name: "John", age: 20 }));  // Output: { name: 'John', age: 20 }
