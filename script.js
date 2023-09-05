const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const equalBtn = document.querySelector('#equal');
const dotBtn = document.querySelector('#dot');
const btn0 = document.querySelector('#zero');
const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#two');
const btn3 = document.querySelector('#three');
const btn4 = document.querySelector('#four');
const btn5 = document.querySelector('#five');
const btn6 = document.querySelector('#six');
const btn7 = document.querySelector('#seven');
const btn8 = document.querySelector('#eight');
const btn9 = document.querySelector('#nine');
const divBtn = document.querySelector('#div');
const multBtn = document.querySelector('#multiply');
const subBtn = document.querySelector('#sub');
const addBtn = document.querySelector('#add');

const display = document.querySelector('.display');
const operation = document.querySelector('.operation');

dotBtn.addEventListener('click', () => addToRunningTotal('.'));
btn0.addEventListener('click', () => addToRunningTotal(0));
btn1.addEventListener('click', () => addToRunningTotal(1));
btn2.addEventListener('click', () => addToRunningTotal(2));
btn3.addEventListener('click', () => addToRunningTotal(3));
btn4.addEventListener('click', () => addToRunningTotal(4));
btn5.addEventListener('click', () => addToRunningTotal(5));
btn6.addEventListener('click', () => addToRunningTotal(6));
btn7.addEventListener('click', () => addToRunningTotal(7));
btn8.addEventListener('click', () => addToRunningTotal(8));
btn9.addEventListener('click', () => addToRunningTotal(9));

addBtn.addEventListener('click', () => chooseOperator('+'));
subBtn.addEventListener('click', () => chooseOperator('-'));
multBtn.addEventListener('click', () => chooseOperator('*'))
divBtn.addEventListener('click', () => chooseOperator('/'));


clearBtn.addEventListener('click', clearAll);
deleteBtn.addEventListener('click', deleteLast);
equalBtn.addEventListener('click', calcResult)

// TO ONLY BE CHANGED FOR DISPLAY IN THE '.OPERATION'
var displayOp = "";
// TO ONLY BE CHANGED FOR DISPLAY IN THE '.OPERATION'

var runningTotal = "";
var operator = "";
var prevTotal = "";

function calcResult() {
    if (displayOp.includes("=")) {
        return
    }
    displayOp = displayOp + " " + runningTotal + " =";
    operation.textContent = displayOp;
    switch(operator) {
        case "+":
            runningTotal = parseFloat(prevTotal) + parseFloat(runningTotal);
            break
        case "-":
            runningTotal = parseFloat(prevTotal) - parseFloat(runningTotal);
            break
        case "*":
            runningTotal = parseFloat(prevTotal) * parseFloat(runningTotal);
            break
        case '/':
            runningTotal = parseFloat(prevTotal) / parseFloat(runningTotal);
            break
    }
    runningTotal = runningTotal.toString();
    display.textContent = runningTotal;
}

function addToRunningTotal(el) {
    if (displayOp.includes('=')) {
        clearAll();
    }
    runningTotal += el;
    display.textContent = runningTotal;
}

function chooseOperator(el) {
    console.log("1 " + operator);
    // Case 1: runningTotal present but no prev operator
    if (operator == "") {
        displayOp = runningTotal + ` ${el}`;
    // Case 2: runningTotal present but prev operator present
    } else {
        displayOp = displayOp.slice(0 , -1) + ` ${el}`;
    }
    prevTotal = runningTotal;
    operation.textContent = displayOp;
    operator = el;
    runningTotal = "";
    console.log("2 " + operator);
}

function clearAll() {
    runningTotal = "";
    prevTotal = "";
    displayOp = "";
    operator = "";
    display.textContent = 0;
    operation.textContent = "";
}

function deleteLast() {
    runningTotal = runningTotal.slice(0, -1);
    display.textContent = runningTotal;
}