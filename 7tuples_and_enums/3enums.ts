//enums are not part of Javscript 
/*
Enums, short for enumerations, are a way to define a set of named constants, typically representing a group of related values. In TypeScript, enums provide a clearer and more readable way to work with such values.

Here's an explanation with examples:
Basics of Enums:

Enums are declared using the enum keyword. The values within the enum are given names, and TypeScript automatically assigns numeric values starting from 0. You can also explicitly set numeric or string values.
Numeric Enums:
*/

enum Direction {
  North,  // 0
  East,   // 1
  South,  // 2
  West    // 3
}

let heading: Direction = Direction.East;
console.log(heading); // Output: 1
/*
In this example, Direction is a numeric enum where each value is assigned a numeric value starting from 0. You can access these values using the enum name followed by the value.
String Enums:

*/

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

let selectedColor: Color = Color.Green;
console.log(selectedColor); // Output: "GREEN"
/*
Here, Color is a string enum, and each value is explicitly assigned a string. String enums provide more readable values compared to numeric enums.
Using Enums in Functions:

Enums are often used to represent sets of related options, making functions more expressive:
*/

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayMessage(day: DayOfWeek): string {
  switch (day) {
    case DayOfWeek.Monday:
      return "It's Monday, start of the week!";
    case DayOfWeek.Friday:
      return "It's Friday, almost the weekend!";
    default:
      return "Enjoy your day!";
  }
}

console.log(getDayMessage(DayOfWeek.Monday)); // Output: "It's Monday, start of the week!"
console.log(getDayMessage(DayOfWeek.Friday)); // Output: "It's Friday, almost the weekend!"
/*
Enums with Custom Values:

You can assign custom values to enum members:

*/

enum Size {
  Small = 10,
  Medium = 20,
  Large = 30
}

let mySize: Size = Size.Medium;
console.log(mySize); // Output: 20

enum Rating {
    Bad = 2,
    Average = 5,
    Good = 7,
    Excellent = 10
  }
  
function feedback(rate: Rating): string {
  if (rate <= Rating.Bad) {
    return `This customer had a bad experience with us`;
  } else if (rate <= Rating.Average) {
    return `This customer seems content with our service`;
  } else if (rate <= Rating.Good) {
    return `This customer had a good experience with us`;
  } else {
    return `This customer seems really happy with our service`;
  } 
}
  
/*
Summary:

Enums in TypeScript provide a convenient way to define a set of named constants, making your code more readable and maintainable. They are particularly useful for representing sets of related options and improving code expressiveness.

*/