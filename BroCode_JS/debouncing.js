const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

// calls debounce function, with a callback that updates the text
const updateDebounceText = debounce(text => {
    debounceText.textContent = text;
});

// event listener when text is typed
input.addEventListener("input", e => {
   defaultText.textContent = e.target.value;
   updateDebounceText(e.target.value);
   updateThrottleText(e.target.value);
});

//makes sure the callback is only called a limited number of times
function debounce(callback, delay = 1000) {
    let timeout;

    return (...args) => {
        clearTimeout(timeout);//clears the current timeout on every call

        // creates new timeout to replace old one
        timeout = setTimeout(() => {
            // calls out callback with our arguments
            callback(...args);
        }, delay);
    }
}



// Throttle keeps sending data until there are no new changes
//      -useful for scrolling or resizing window, or mouse moving as these are resource intensive calls and dont
//          want to be called continuously

const updateThrottleText = throttle((text) => {
    throttleText.textContent = text;
});

function throttle(callback, delay=1000) {

    let shouldWait = false;
    let waitingArgs;
    //chacks that nothing new has been typed within the delay
    const timeoutFunc = () => {
        if (waitingArgs == null) {
            shouldWait = false;
        } else {
            callback(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay);
        }
    }

    return (...args) => {
        
        if (shouldWait) {
            waitingArgs = args;
            return;
        }

        callback(...args);//changes immediately
        shouldWait = true;//stop sending data until time has elapsed

        //allows us to reset the timer upon input
        setTimeout(timeoutFunc, delay);
    }
}



// throttle for moving mouse
const mouseCount = document.getElementById("mouseCount");
const mouseCountDebounced = document.getElementById("mouseCountDebounced");
const mouseCountThrottled = document.getElementById("mouseCountThrottled");

document.addEventListener("mousemove", e => {
    incrementCount(mouseCount);
    updateMouseDebounce(mouseCountDebounced);
    updateMouseThrottle(mouseCountThrottled)
});

function incrementCount(element) {
    element.textContent = (parseInt(element.innerText) || 0) + 1;
}

//update text callbacks
const updateMouseDebounce = debounce(() => {
    incrementCount(mouseCountDebounced);
});
const updateMouseThrottle = throttle(() => {
    incrementCount(mouseCountThrottled);
});