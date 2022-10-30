const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}



function generateCalculation(operator, resultBeforeCalc, calcNumber) {
    const description = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, description)
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        enteredNumber: operationNumber,
        result: newResult,
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const originalValue = currentResult;
    currentResult += getUserNumberInput();
    generateCalculation('+', originalValue, getUserNumberInput());
    writeToLog('ADD', originalValue, getUserNumberInput(), currentResult);
}

function subtract() {
    const originalValue = currentResult;
    currentResult -= getUserNumberInput();
    generateCalculation('-', originalValue, getUserNumberInput());
    writeToLog('SUBTRACT', originalValue, getUserNumberInput(), currentResult);
}

function multiply() {
    const originalValue = currentResult;
    currentResult *= getUserNumberInput();
    generateCalculation('*', originalValue, getUserNumberInput());
    writeToLog('MULTIPLY', originalValue, getUserNumberInput(), currentResult);
}

function divide() {
    const originalValue = currentResult;
    currentResult /= getUserNumberInput();
    generateCalculation('/', originalValue, getUserNumberInput());
    writeToLog('MULTIPLY', originalValue, getUserNumberInput(), currentResult);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);