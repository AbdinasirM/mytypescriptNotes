// In TypeScript, you can define arrays for various types in two ways:

// Common way to define an array:
let fruits: boolean[] = [];
let numbers: number[] = [];
let names: string[] = [];
let mixedArray: any[] = []; // An array that can hold elements of any type

// Another way using the Array type with generics:
let fruits1: Array<boolean> = [];
let numbers1: Array<number> = [];
let names1: Array<string> = [];
let mixedArray1: Array<any> = []; // An array that can hold elements of any type

// Example using the common way for boolean arrays:
fruits.push(true);
fruits.push(false);
console.log(fruits); // Output: [true, false]

// Example using the Array type with generics for number arrays:
numbers1.push(1);
numbers1.push(2);
console.log(numbers1); // Output: [1, 2]
