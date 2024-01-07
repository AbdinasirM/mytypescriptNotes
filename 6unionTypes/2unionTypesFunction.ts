// TypeScript Union Types with Functions:

// Example without union type as a return type of the function:
function printAge(age: number | string): void {
    console.log(`Hello! You are ${age} years old.`);
}

// Example with union types:
// Let's assume we're retrieving data from an API, where the price could be a number like 32 or a string like "$12".
// We want the function to accept both types.
function calculateTax(price: string | number, tax: number): number {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", "")); // Remove the $ sign and convert the string to a float
    } else {
        return price * tax;
    }
}

// Note: Union types in function parameters or return types are useful when dealing with diverse data types, 
// but it's important to handle each type appropriately within the function's logic.
