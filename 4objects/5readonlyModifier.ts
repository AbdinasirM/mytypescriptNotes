// The 'readonly' modifier in TypeScript allows you to set a value to a variable during initialization, but prevents further modifications.

// Example without the readonly modifier:
type Employee = {
    id: number;
    name: string;
    hoursWorked: number;
  };
  
  const emp1: Employee = {
    id: 1,
    name: "John",
    hoursWorked: 160,
  }
  
  // Modifying values is allowed without any restrictions
  emp1.id = 200;
  emp1.name = "William";
  emp1.hoursWorked = 180;
  
  // Example using the readonly modifier:
  type Employee2 = {
    readonly id: number;
    name: string;
    hoursWorked: number;
  };
  
  const emp2: Employee2 = {
    id: 1,
    name: "John",
    hoursWorked: 160,
  }
  
  // Attempting to modify a readonly property results in a compile-time error
  // emp2.id = 200; // Cannot assign to 'id' because it is a read-only property. ts(2540)
  emp2.name = "John";
  emp2.hoursWorked = 180;
  