// TypeScript Interface Extending:

// Extending an interface in TypeScript means inheriting from another interface. It allows us to create more specialized interfaces based on existing ones, and a single interface can extend multiple interfaces.

// Example:

// Base interface representing a generic Employee
interface Employee {
    name: string,
    readonly id: number,
    department: string,
    work(): void,
    level: string
}

// Specialized interface for Developers, extending the Employee interface
interface Developer extends Employee {
    role: string,
    specialty: string,
}

// Specialized interface for HR, also extending the Employee interface
interface HR extends Employee {
    role: string,
}

// Examples of objects conforming to the specialized interfaces
const emp1: Developer = {
    name: "Alexander",
    role: "Web Developer",
    id: 9564313,
    department: "Software Engineer",
    work() {
        console.log(`${this.name} is a ${this.role} and works in the ${this.department} department.\nID: ${this.id}\nLevel: ${this.level}\n`);
    },
    specialty: "Javascript Developer",
    level: "Junior"
};

const emp2: HR = {
    name: "Jane Doe",
    role: "Supervisor",
    id: 12369542,
    department: "HR",
    work() {
        console.log(`${this.name} is a ${this.role} and works in the ${this.department} department.\nID: ${this.id}\nLevel: ${this.level}\n`);
    },
    level: "Senior",
};

emp1.work();
emp2.work();

// Note: Interfaces can be extended to create more specific interfaces, enhancing code organization and readability. 
// Additionally, interfaces can be open for extension, allowing new properties to be added in the future.
