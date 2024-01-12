// Abstract class: Represents a blueprint with rules that must be followed if it is used.
abstract class Employee {
    // Constructor with parameters for first name and last name.
    constructor(public firstName: string, public lastName: string) {}

    // Abstract method to be implemented by subclasses to get the pay.
    abstract getPay(): number;
}

// Subclass for full-time employees.
class Fulltime extends Employee {
    // Constructor with parameters for first name, last name, and private salary.
    constructor(public firstName: string, public lastName: string, private salary: number) {
        super(firstName, lastName);
    }

    // Implementation of the abstract method to get the pay.
    getPay(): number {
        return this.salary;
    }
}

// Subclass for part-time employees.
class Parttime extends Employee {
    // Constructor with parameters for first name, last name, hourly rate, and hours worked.
    constructor(public firstName: string, public lastName: string, private hourlyRate: number, private hoursWorked: number) {
        super(firstName, lastName);
    }

    // Implementation of the abstract method to get the pay.
    getPay(): number {
        // Calculate pay based on hourly rate and hours worked multiplied by 12 (assuming monthly calculation).
        return this.hourlyRate * this.hoursWorked * 12;
    }
}

// Creating objects to test the classes.
const employee1 = new Fulltime("Betty", "Johnson", 88000);
console.log(`${employee1.firstName} ${employee1.lastName} made $${employee1.getPay()} this year.`);

const employee2 = new Parttime("Abdi", "Nasir", 17, 6);
console.log(`${employee2.firstName} ${employee2.lastName} made $${employee2.getPay()} this year.`);
