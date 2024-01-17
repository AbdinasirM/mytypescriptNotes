// truthiness guard means that we use booleans operators in conditional expressions
function isAdmin(permision: boolean) : boolean {
    if(!permision){
        return false;
    }
    else{
        return permision
    }
}

console.log(isAdmin(true));