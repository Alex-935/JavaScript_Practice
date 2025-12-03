/*
    Promises = An object that manages asynchronous operations.
               Wrap a Promise object around {asynchronous code}
               "I promise to return a value"
               PENDING => RESOLVED or REJECTED
               new Promise((resolve, reject) => {asynchronous code})
*/

/*
    Do chores in this order:
        1. Walk the dog
        2. Clean the kitchen
        3. Take out the trash
*/

function walkDog() {
    
    return new Promise((resolve, reject) => {
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

            const kitchenCleaned = false;

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


walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeoutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores!")})
         .catch(error => console.error(error));

// the further promises wont be attempted if a previous fails