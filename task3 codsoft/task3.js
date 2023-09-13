let display = document.getElementById("display");
let output = "";

function appendToDisplay(value) {
    output += value;
    display.textContent = output;
}

function calculate() {
    try {
        output = eval(output).toString();
        display.textContent = output;
    } catch (error) {
        display.textContent = "Error";
    }
}

function clearDisplay() {
output = "";
    display.textContent = "0";
}

function deleteLastCharacter() {
    if (output.length > 0) {
        output = output.slice(0, -1);
        display.textContent = output;
    }
}


