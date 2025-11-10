const myCheckbox = document.getElementById("myCheckbox");
const weskerButton = document.getElementById("weskerButton");
const adaButton = document.getElementById("adaButton");
const jillButton = document.getElementById("jillButton");
const mySubmit = document.getElementById("mySubmit");
const checkboxResult = document.getElementById("checkboxResult");
const radioResult = document.getElementById("radioResult");


mySubmit.onclick = function() {
    
    if (myCheckbox.checked) {
        checkboxResult.textContent = `When the residents are evil.`;
    }

    if (weskerButton.checked) {
        radioResult.textContent = "Ah Chris, you haven't changed.";
    }
    else if (adaButton.checked) {
        radioResult.textContent = "Not bad, Leon.";
    }
    else {
        radioResult.textContent = "I'll show you S.T.A.R.S.";
    }
}


let day = 1;
switch (day) { 
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log(`${day} is not a valid day.`);
}


let testScore = 92;
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = 'A';
        break;
    case testScore >= 80:
        letterGrade = 'B';
        break;
    case testScore >= 70:
        letterGrade = 'C';
        break;
    case testScore >= 60:
        letterGrade = 'D';
        break;
    default: 
        letterGrade = 'F';
}

console.log(letterGrade);