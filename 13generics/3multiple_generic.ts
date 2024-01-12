// Generic function merge without type constraints
function merge<T, U>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    };
}

// Example usage: merge objects with different properties
const comboObject = merge({ name: "test" }, { age: 1523 });

// Log the result
console.log(comboObject);


// Generic function merge with type constraints
function mergeWithConstraints<T extends Object, U extends Object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    };
}

// Example usage: merge objects with different properties while enforcing type constraints
const constrainedComboObject = mergeWithConstraints({ name: "test" }, { age: 1523 });

// Log the result
console.log(constrainedComboObject);

/*
Explanation:

    The first example shows the generic merge function without type constraints, allowing it to take any types as parameters.
    The second example introduces a new function mergeWithConstraints with type constraints (extends Object) on both T and U, ensuring that only objects can be passed as parameters.
    Both examples demonstrate merging objects with different properties and logging the result to the console. The second example provides better type safety by enforcing constraints on the types of objects that can be merged.

*/