"use strict";
// The Bike class implements the Colorful interface.
class Bike {
    // Constructor to set the color when creating a Bike object.
    constructor(color) {
        this.color = color;
    }
}
// The Jacket class implements both the Colorful and Printable interfaces.
class Jacket {
    // Constructor to set the color and brandName when creating a Jacket object.
    constructor(color, brandName) {
        this.color = color;
        this.brandName = brandName;
    }
    // Implementation of the Printable interface method.
    print() {
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
