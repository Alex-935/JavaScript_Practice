/*
    Async/Await:    Async = makes a function return a promise
                    Await = makes an async function wait for a promise

                    Allows you to write asynchronous code in a synchronous manner
                    Async doesn't have resolve or reject parameters
                    Everything after Await is placed in an event queue
*/


function walkDog() {
    
    return new Promise((resolve, rejec) => {
        setTimeout(() => {

            const dogWalked = true;

            if (dogWalked) {
                resolve("You walk the dog");//completion message
            }
            else {
                reject("You didn't walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if (kitchenCleaned) {
                resolve("You clean the kitchen");
            }
            else {
                reject("You didn't clean the kitchen");
            }
            
        }, 2500);
    });
}

function takeoutTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = true;
        
            if (trashTakenOut) {
                resolve("You take out the trash");
            }
            else {
                reject("You didn't take out the trash");
            }

        }, 500);
    });
}

/*
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeoutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores!")})
         .catch(error => console.error(error));

// the further promises wont be attempted if a previous fails
*/

async function doChores() {

    //await can only be used in async functions

    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeoutTrashResult = await takeoutTrash();
        console.log(takeoutTrashResult);

        console.log("You finished all the chores");
    }
    catch (error) {
        console.error(error);
    }
}

doChores();