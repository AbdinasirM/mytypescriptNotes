// Interfaces define the shape of classes that implement them.
interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

// The Bike class implements the Colorful interface.
class Bike implements Colorful {
    color: string;

    // Constructor to set the color when creating a Bike object.
    constructor(color: string) {
        this.color = color;
    }
}

// The Jacket class implements both the Colorful and Printable interfaces.
class Jacket implements Colorful, Printable {
    color: string;
    brandName: string;

    // Constructor to set the color and brandName when creating a Jacket object.
    constructor(color: string, brandName: string) {
        this.color = color;
        this.brandName = brandName;
    }

    // Implementation of the Printable interface method.
    print(): void {
        console.log("Yes");
    }
}

// Creating an object of a Bike.
const myBike = new Bike("black");
console.log(`My bike is ${myBike.color}.`);

// Creating an object of a Jacket.
const myJacket = new Jacket("black", "something");
console.log(`My jacket is ${myJacket.color} and it's from ${myJacket.brandName}.`);

// Calling the print method on the Jacket object.
myJacket.print();
