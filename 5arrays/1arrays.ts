// In TypeScript, specifying the type of elements in an array is essential for type safety and clarity.

// Example: String array
let activeUsers: string[] = [];
activeUsers.push("Max");
// Here, 'activeUsers' is explicitly defined as an array that holds only string values.

// Example: Number array
let activeUsers2: number[] = [];
activeUsers2.push(5);
// 'activeUsers2' is specifically declared as an array containing only number values.

// Example: Boolean array
let activeUsers3: boolean[] = [];
// 'activeUsers3' is defined as an array meant to store boolean values.

// Example: Any array
let activeUsers4: any[] = [];
activeUsers4.push(5);
activeUsers4.push("Max");
activeUsers4.push(true);
// 'activeUsers4' is an array of type 'any,' allowing elements of any type to be added.
// Note: While 'any' provides flexibility, it sacrifices some of TypeScript's type safety benefits.
