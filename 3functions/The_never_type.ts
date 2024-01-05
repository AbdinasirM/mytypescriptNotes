// The "never" type is used to represent values that are never stopping or not expected

//example of void function:
function sayHello(name: string): void {
  console.log(`Hello ${name}`);
};

sayHello("John");// return a data type


//Example of never(type) function:
function ego(name: string): never {
  throw new Error(`I (${name}) am the best at everything`);
}

ego("John"); does


//Another example of the never function type:
function gameloop(): never {
  while (true) {
    console.log("Gameloop running");
  }
}