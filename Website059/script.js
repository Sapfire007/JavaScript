// Error = An Object that is created to represent a problem but occurs
//         Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//               ex. close files, close connections, release resources


console.log("Hello");

try{
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch(error){
    console.error(error);
}
finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
}

console.log("End of 1st part of program!");

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("You cant divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend/divisor;
    console.log(result);
}
catch(error){
    console.error(error)
}

console.log("You have reached the end!");