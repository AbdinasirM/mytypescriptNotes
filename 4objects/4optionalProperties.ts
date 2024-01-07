// TypeScript allows for the definition of optional properties in a type, providing flexibility and avoiding errors when certain properties are not present.

// Example without optional properties:
type Animal = {
    name: string;
    age: number;
    isMammal: boolean;
}

const animal: Animal = {
    name: "Cat",
    age: 2,
    isMammal: true
}; // No errors as all required properties are provided

// However, omitting a required property will result in an error:
// const animal2: Animal = {
//     name: "Cat",
//     age: 2,
// }; // Property 'isMammal' is missing in type '{ name: string; age: number; }' but required in type 'Animal'.

// Example using optional properties with the "?" mark:
type Player = {
    name: string;
    age: number;
    height: number;
    isRich?: boolean;
};

const player1: Player = {
    name: "Messi",
    age: 34,
    height: 170,
    isRich: true
};

const player2: Player = {
    name: "Messi",
    age: 34,
    height: 170,
}; // No error, as the "isRich" property is marked as optional in the Player type
