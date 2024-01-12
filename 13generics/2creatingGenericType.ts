// Generic function to get a random element from an array
function getRandomElement<T>(list: T[]): T {
    // Generate a random index within the array length
    const randomIndex = Math.floor(Math.random() * list.length);

    // Return the element at the random index
    return list[randomIndex];
}

// Example usage with a string array
let names: string[] = ["Alex", "Jane", "John", "Mary", "Mike"];

// Example usage with a number array
let giftNumbers: number[] = [45, 15, 20, 30, 50];

// Display a random name and a random gift amount
console.log(`${getRandomElement(names)} won $${getRandomElement(giftNumbers)}.`);
