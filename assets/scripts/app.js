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



function calculate(operation) {
    const originalValue = currentResult;
    let operator = ""
    if (operation === 'ADD') {
        currentResult += getUserNumberInput();
        operator = "+"
    } else if (operation === 'SUBTRACT') {
        currentResult -= getUserNumberInput();
        operator = "-"
    } else if (operation === 'MULTIPLY') {
        currentResult *= getUserNumberInput();
        operator = "*"
    } else {
        currentResult /= getUserNumberInput();
        operator = "/"
    }
    generateCalculation(operator, originalValue, getUserNumberInput());
    writeToLog(operation, originalValue, getUserNumberInput(), currentResult);
}



addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));