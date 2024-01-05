// void is a type that indicates a value is not expected(return) from a function

//example of a function that is exprected to return a type(string)
const pingAserver = (address:string):string => {
    console.log(`Pinging ${address}`);
    return "something else is going on";
}; 


pingAserver("google.com");

//example of a function that is not expected to return a type(void)
const pingAserver2 = (address:string):void => {
    console.log(`Pinging ${address}`);
    return "something else is going on" // TS error says Type 'string' is not assignable to type 'void'

};