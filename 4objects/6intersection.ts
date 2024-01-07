// Intersection type in TypeScript combines multiple types using the "&" operator, allowing you to create a new type that includes all properties from each source type.

// Example using the intersection type:

// Defining a type for a circle with a radius
type Circle = {
  radius: number;
}

// Defining a type for a colorful object with a color
type Colorful = {
  color: string;
}

// Creating a new type, ColorfulCircle, by combining Circle and Colorful using the intersection type
type ColorfulCircle = Circle & Colorful;

// Example usage of ColorfulCircle
const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow"
}

// Combining two types and adding one more property:

// Defining a type for a person with names and age
type Person = {
  names: string;
  age: number;
}

// Defining a type for a developer with TypeScript knowledge
type Developer = {
  knowsTypeScript: boolean;
}

// Creating a new type, AwesomePerson, by combining Person, Developer, and an additional property isAwesome
type AwesomePerson = Person & Developer & {
  isAwesome: boolean;
}

// Example usage of AwesomePerson
const pers1: AwesomePerson = {
  names: "John",
  age: 20,
  knowsTypeScript: true,
  isAwesome: true
}
