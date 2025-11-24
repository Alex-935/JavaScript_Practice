/*
    Error = An object that is created to represent a problem that occurs
            Often occurs with user input or establishing a connection

            //Network Errors
            - Promise Rejection
            - Secutity Errors
*/

try {
    console.log(x);
}
catch(error) {
    console.error(error);
}
finally {
    console.log(`This always executes`);
    //normally used for closing files or cleaning up resources
}

console.log("you have reached the end of the program!");

try {
    const dividened = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if (divisor == 0) {
        throw new Error("You can't divide by 0");
    }
    if (isNaN(dividened) || isNan(divisor)) {
        throw new Error("Values must be a number");
    }

    const result = dividened / divisor;
    console.log(result);
}
catch (error) {
    console.error(error);
}
