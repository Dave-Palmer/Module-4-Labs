// Button selectors
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')

const add = document.querySelector('#add')
const subtract = document.querySelector('#minus')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')

const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')

const displayScreen = document.querySelector('#calculator-screen')

let operator = ''
let firstNum = ''
let secondNum = ''

let checkFunc = function (num) {
    if (displayScreen.innerHTML.length < 3 && firstNum == '') {
        displayScreen.innerHTML += num;
        firstNum = num
    } else if (displayScreen.innerHTML.length < 3 && firstNum) {
        displayScreen.innerHTML += num;
        secondNum = num
    } else { alert('no') }
}

let clearSceen = () => {
    displayScreen.innerHTML = ''
    firstNum = ''
    secondNum = ''
    operator = ''
}

let sumFunc = function () {
    switch (operator) {
        case '+': displayScreen.innerHTML = `= ${firstNum + secondNum}`;
            break;
        case '-': displayScreen.innerHTML = `= ${firstNum - secondNum}`;
            break;
        case '*': displayScreen.innerHTML = `= ${firstNum * secondNum}`;
            break;
        case '/': displayScreen.innerHTML = `= ${firstNum / secondNum}`;
        default: return 'Not a valid operator'
    }
}


one.addEventListener('click', () => checkFunc(1))
two.addEventListener('click', () => checkFunc(2))
three.addEventListener('click', () => checkFunc(3))
four.addEventListener('click', () => checkFunc(4))
five.addEventListener('click', () => checkFunc(5))
six.addEventListener('click', () => checkFunc(6))
seven.addEventListener('click', () => checkFunc(7))
eight.addEventListener('click', () => checkFunc(8))
nine.addEventListener('click', () => checkFunc(9))
zero.addEventListener('click', () => checkFunc(0))


clear.addEventListener('click', () => clearSceen())
equals.addEventListener('click', () => sumFunc())

add.addEventListener('click', () => {
    if (displayScreen.innerHTML.length < 3) {
        displayScreen.innerHTML += '+';
        operator = '+'
    }
})
subtract.addEventListener('click', () => {
    if (displayScreen.innerHTML.length < 3) {
        displayScreen.innerHTML += '-';
        operator = '-'
    }
})
multiply.addEventListener('click', () => {
    if (displayScreen.innerHTML.length < 3) {
        displayScreen.innerHTML += 'x';
        operator = '*'
    }
})
divide.addEventListener('click', () => {
    if (displayScreen.innerHTML.length < 3) {
        displayScreen.innerHTML += '/';
        operator = '/'
    }
})







