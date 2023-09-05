var runningTotal = "";
var prevTotal = "";
var OP = "";
var result = 0;
var initial = "";

// TO ONLY BE CHANGED FOR DISPLAY IN THE '.OPERATION'
var displayOp = "";

function calcResult() {
    displayOp = displayOp + runningTotal + ' =';
    console.log(displayOp)
    operation.textContent = displayOp;
    switch(OP) {
        case '+':
            result = prevTotal + runningTotal;
        case '-':
            result = prevTotal - runningTotal;
        case '*':
            result = prevTotal * runningTotal;
        case '/':
            result = prevTotal / runningTotal;
        display.textContent = result;
    }
}

function addToRunningTotal(el) {
    console.log(displayOp);
    if (displayOp.includes('+') || displayOp.includes('-') || displayOp.includes('*') || displayOp.includes('/')) {
        runningTotal = "";
        initial = "";
        display.textContent = runningTotal;
    }
    runningTotal += el;
    initial += runningTotal;
    display.textContent = runningTotal;
}

function chooseOp(el) {
    OP = el;
    displayOp += initial;
    if (!displayOp.includes('+') && !displayOp.includes('-') && !displayOp.includes('*') && !displayOp.includes('/')) {
        displayOp += ` ${el}`;
        operation.textContent = displayOp;
    } else {
        displayOp = displayOp.slice(0, -1) + ` ${el}`;
        operation.textContent = displayOp;
    }
    prevTotal = runningTotal;
    display.textContent = "";
    console.log(displayOp);
}

function clearAll() {
    display.textContent = 0;
    operation.textContent = "";
    runningTotal = "";
    displayOp = "";
    prevTotal = "";
    OP = "";
    result = 0;
    initial = 0;
}

function deleteLast() {
    runningTotal = runningTotal.slice(0, -1);
    display.textContent = runningTotal;
}
