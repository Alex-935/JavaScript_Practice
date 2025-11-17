// Elements ids
const tempInput = document.getElementById("temperatureInput");
const c2f = document.getElementById("c2f");
const f2c = document.getElementById("f2c");
const tempSubmit = document.getElementById("convertSubmit");
const convertedTemp = document.getElementById("convertedTemp");

let temp;

//function convert() {
tempSubmit.onclick = function() {

    temp = Number(tempInput.value);

    /*if (isNaN(temp)) {
        convertedTemp.textContent = `Please enter a valid number`;
    }
    else*/
    if (c2f.checked) {
        convertedTemp.textContent = `${(temp*9/5 + 32).toFixed(1)}°C`;
    }
    else if (f2c.checked) {
        convertedTemp.textContent = `${((temp-32)*5/9).toFixed(1)}°F`;
    }
    else {
        convertedTemp.textContent = `Please select a unit`;
    }
}
