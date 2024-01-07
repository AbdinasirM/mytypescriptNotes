// TypeScript Interfaces with Readonly and Optional Properties:

// Interfaces in TypeScript can include readonly and optional properties.

// Example:
interface Vehicle {
    readonly model: string,
    make: string,
    madeIn: string,
    manufacturer: string,
    color?: string,       // Optional property denoted by the "?"
    isNew: boolean,
    makeSound(): string   // Method signature within the interface
}

const car: Vehicle = {
    model: "ABACUI7",
    make: "TheLa",
    madeIn: "USA",
    manufacturer: "Ford",
    color: "Blue and White",
    isNew: true,
    makeSound() {
        return "VROOM!";
    }
};

const bike: Vehicle = {
    model: "asa89",
    make: "TheULI",
    madeIn: "Japan",
    manufacturer: "Nokia",
    color: "White",
    isNew: false,
    makeSound() {
        return "VROOM!";
    }
};

// Testing readonly property:
// This will result in a TypeScript error:
// car.model = ""; // Error: Cannot assign to 'model' because it is a read-only property.

// Note: Readonly properties ensure that the assigned values cannot be modified after initialization, and optional properties allow flexibility by making certain properties optional.
