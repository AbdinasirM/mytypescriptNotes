
//example without type annotation for the function parameter:
function square(num){
    return num * num;
 }

square(5); //there is no type checking and the type of the function parameter was by default set to be any
square("abdi");
square(true);



//example with type annotation:
function square1(num: number){
    return num * num;
 }

square1(5);
square1("abdi"); //TS will not allow this because the parameter of the function is set to be a number 
square1(true); //TS will not allow this because the parameter of the function is set to be a number

const todoListCheck = (task1:string, completionrate:number) => {
    console.log("The task is " + task1 + " and the completion rate is " + completionrate + "%");
}

todoListCheck("Buy milk", 100);