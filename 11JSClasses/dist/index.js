// Use strict mode for better error handling and code quality
"use strict";

// Log a message to verify that the script is working
console.log("It is working");

// Define a base class named Player
class Player {
    #score = 0;
    numLives = 10;

    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.#secret();
    }

    taunt() {
        console.log("BOOYAH");
    }

    loseLife() {
        this.numLives -= 1;
    }

    #secret() {
        console.log("secret");
    }

    get score() {
        return this.#score;
    };

    set score(s) {
        if (s < 0) {
            throw new Error("Score must be equal or greater than zero");
        } else {
            this.#score = s;
        }
    }
}

// Create a derived class named EnhancedPlayer that extends the Player class
class EnhancedPlayer extends Player {
    constructor(fname, lname, power) {
        // Call the constructor of the base class using super()
        super(fname, lname);
        // Additional property specific to EnhancedPlayer
        this.power = power;
    }

    // Override the taunt method of the base class
    taunt() {
        console.log("SUPER BOOYAH");
    }

    // New method specific to EnhancedPlayer
    usePower() {
        console.log(`Using power: ${this.power}`);
    }
}

// Create an instance of the EnhancedPlayer class using the 'new' keyword
const enhancedPlayer1 = new EnhancedPlayer("Alice", "Bob", "Teleportation");

// Call the overridden taunt method on the enhancedPlayer1 object
enhancedPlayer1.taunt();

// Call the inherited methods from the base class
console.log(enhancedPlayer1.fname + " " + enhancedPlayer1.lname);
enhancedPlayer1.setScore(12); // Assuming setScore is a method of the base class (not defined in the provided code)
console.log(enhancedPlayer1.getScore()); // Assuming getScore is a method of the base class (not defined in the provided code)

// Call the new method specific to EnhancedPlayer
enhancedPlayer1.usePower();
