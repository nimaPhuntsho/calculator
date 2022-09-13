const btn = document.querySelectorAll('#btn');
const displayScreen = document.getElementById('display-screen');
const add = document.querySelector('#add');
const minus = document.querySelector('#minus'); 
const divide = document.querySelector('#divide')
const multiply = document.querySelector('#multiply');
const equal = document.querySelector('#equal');
const allClear = document.getElementById('all-clear');

let firstNumber = 0; //store the first number for the operation. 
let secondNumber = 0; //store the last number for the operation.
let operationSign = ""; //store the operational sign for the operation.

//Loops through all the buttons and appends its value on the screen of a calculator.
for (let elements of btn) {
    elements.addEventListener('click', function () {
        let value = elements.getAttribute('value');
        displayScreen.append(value);
    });
}

add.addEventListener('click', function () {
    firstNumber = displayScreen.innerText;
    displayScreen.innerText = "";
    operationSign = add.getAttribute('value');
});

minus.addEventListener('click', function () {
    firstNumber = displayScreen.innerText;
    displayScreen.innerText = "";
    operationSign = minus.getAttribute('value');

});

divide.addEventListener('click', function () {
    firstNumber = displayScreen.innerText;
    displayScreen.innerText = "";
    operationSign = divide.getAttribute('value');
});

multiply.addEventListener('click', function () {
    firstNumber = displayScreen.innerText;
    displayScreen.innerText = "";
    operationSign = multiply.getAttribute('value');
});

equal.addEventListener('click', function() {
    secondNumber = displayScreen.innerText;
    switch (operationSign) {
        case '+': 
            displayScreen.innerText = parseFloat(firstNumber) + parseFloat(secondNumber);
            break; 

        case '-':
            displayScreen.innerText = parseFloat(firstNumber) - parseFloat(secondNumber);
            break; 

        case '/':
            displayScreen.innerText = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;

        case '*': 
            displayScreen.innerText = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
    }
})

allClear.addEventListener('click', function () {
    displayScreen.innerText = "";
}); 