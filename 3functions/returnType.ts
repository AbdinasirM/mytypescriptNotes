//we can assign a return type to a function like number function will only return a number and vice versa

//example without return type:
function greet(name: string){
    return 6+9;
}

greet('John');

//example with return type:
function greet2(name: string): string{
    return 6+9; //Type 'number' is not assignable to type 'string'.ts(2322)

}


greet2('John');