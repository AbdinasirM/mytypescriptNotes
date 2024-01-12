// Class representing a Player
class Player {
    // Properties are public by default in TypeScript
    public readonly firstName: string;
    public readonly lastName: string;
    public score: number = 0; // Default score is 0
    protected secret: string; // Protected property for internal use

    // Constructor to initialize first name and last name
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter method to retrieve the secret
    getSecret(): string {
        return this.secret;
    }

    // Getter method for a formatted full name
    get fullname(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter method to set a new secret
    set setSecret(newSecret: string) {
        this.secret = newSecret;
    }

    // Setter method to set a new score with validation
    set setScore(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score must be greater than zero");
        } else {
            this.score = newScore;
        }
    }

    // Method to display player information
    displayInfo(): void {
        console.log(`Your full name is ${this.fullname}.\nYour score is ${this.score} and the secret is ${this.getSecret()}`);
    }
}

// Subclass extending the Player class
class SuperPlayer extends Player {
    public isAdmin: boolean = true; // Additional property for super players

    // Method to set the score to the maximum value
    maxScore(): void {
        this.score = 99999;
    }
}

// Create an object of the Player class
const person = new Player("Abdi", "Nasir");
person.score = 12;
person.setScore = 99;
person.setSecret = "No secret";

person.displayInfo();