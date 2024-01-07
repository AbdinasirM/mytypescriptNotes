//type alias:is like creating a template that can be used everywhere instead of to write everytime

//example without using type alias:
// Function to generate and return a random coordinate object with 'x' and 'y' properties
function makeRandomCoordinate(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() };
}

// Example usage of the makeRandomCoordinate function
makeRandomCoordinate();


//example using alias:
type Point= {
    x:number,
    y:number
}
function makerandomCoordinate():Point {
    return {x:Math.random(),y:Math.random()}
}

console.log(makerandomCoordinate())


