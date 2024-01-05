const colors = ['red', 'green', 'blue'];

colors.map(color => {
    return color.toUpperCase();
})

//TS can determined the type of a function by looking at the elements used with it like the colors string array.
//TS figured out that the color should return a string array because we used the string array of colors with map
