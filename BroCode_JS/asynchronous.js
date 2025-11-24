/*
     Synchronous Code = Executes line by line consecutively in a sequential manner
                        Code that waits for an operation to complete

    Asynchronous Code = Allows multiple operations to be performed concurrently without waiting
                        Doesn't block the execution flow and allows the program to continue
                        (IO operations, network requests,  fetching data)
                        Handled with: Callbacks, Promises, Async/Await
*/


function func1(callback) {
    setTimeout(() => {
        console.log("Task 1");
        callback();
    }, 2000);
}

function func2() {
    console.log("Task 2");
    console.log("Task 3")
}

func1(func2);