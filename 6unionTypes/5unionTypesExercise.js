// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
//My solution:
var highScore;
highScore = 32;
highScore = true;
//works fine
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
//My solution:
var stuff = [];
stuff = [1, 2, 3, 4];
stuff = ["a", "b", "c"];
// Create an array called colors that can hold a mixture of RGB and HSL color types
//My solution:
var colors = [];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
//My solution:
function greet(n) {
    if (typeof n === "string") {
        console.log("Hello, ".concat(n));
    }
    else {
        for (var i = 0; i < n.length; i++) {
            console.log("Hello, ".concat(n[i]));
        }
        ;
    }
}
var names = ["Alex", "John", "Maddy"];
greet(names);
greet("Abdi");
