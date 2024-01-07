// TypeScript Interface vs Type:

// When to use 'type' vs 'interface' in TypeScript:

// Interfaces are specifically for describing the shape of objects and cannot be used to describe other types.

// Example:

// Using 'type' to describe a specific shape including literal types
type TypeThing = {
    item: string
};

// Using 'interface' to achieve the same effect
interface InterfaceThing {
    item: string
}

// Note: Interfaces are dedicated to object shapes, ensuring clarity in object structure definitions.


// Interfaces can be extended with other interfaces, promoting code organization and readability.

// Example:

interface BaseUser {
    name: string;
    age: number;
}

interface ExtendedUser extends BaseUser {
    role: string;
}

// On the other hand, 'type' cannot extend, but we can use the intersection "&" to combine types.

// Example:

type BaseType = {
    name: string;
    age: number;
};

type ExtendedType = BaseType & {
    role: string;
};

// Note: While 'type' cannot extend, it can use the intersection "&" to combine types, achieving a similar effect.
