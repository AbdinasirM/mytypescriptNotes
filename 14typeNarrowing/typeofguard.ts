// typeof works with basic data structure
//tyoefguard: means using typeof inside a conditionals ifelse
function triple(value: number | string){
    if(typeof value === "string"){//works only if it is string type
        return value.repeat(3);
    }
    return value * 3; //works if it a number
}