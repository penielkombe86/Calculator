// logic behind updating the screen:
// - keep track of the first No and second No and operator
// - 

const buttonContainer = document.querySelector(".button-container")
let screenValue = document.querySelector(".screen-value")

let state = {
    firstNumber: "",
    operator: "",
    secondNumber: ""
}

screenValue.textContent = 0

const calcBtnObject = [
    {id: "clear", icon: "C"},
    {id: "delete", icon: "⌫"},
    {id: "percent", icon: "%"}, 
    {id: "divide", icon: "÷"},
    {id: "seven", icon: "7"},
    {id: "eight", icon: "8"},
    {id: "nine", icon: "9"},
    {id: "multiply", icon: "x"},
    {id: "four", icon: "4"},
    {id: "five", icon: "5"},
    {id: "six", icon: "6"},
    {id: "minus", icon: "-"},
    {id: "one", icon: "1"},
    {id: "two", icon: "2"},
    {id: "three", icon: "3"},
    {id: "plus", icon: "+"},
    {id: "zero", icon: "0"},
    {id: "decimal", icon: "."},
    {id: "plus-minus", icon: "+/-"},
    {id: "equal", icon: "="},
]


function generateCalcBtns() {
    for (let i = 0;i < calcBtnObject.length; i++) {
        let button = document.createElement("button")
        let span = document.createElement("span")
        
        span.textContent = calcBtnObject[i].icon
        span.classList.add("btn-icon")

        button.appendChild(span)
        button.id = calcBtnObject[i].id
        button.classList.add("calc-btn")
        buttonContainer.appendChild(button)
        // set the dataset of the buttons to the button icon for easier tracking
        button.dataset.val= calcBtnObject[i].icon
    }
}

generateCalcBtns()

function render() {
    // render the states on the screen in real time
    let display = state.firstNumber + state.operator + state.secondNumber
    if (state.firstNumber === "" && state.operator === "" && state.secondNumber === "") {
        screenValue.textContent = 0
        return 
    }
    screenValue.textContent = display 
}

function handleNegativeNumbers(value) {
    // create new negative numbers when the user click the minus symbol
    if (!state.firstNumber) { 
        state.firstNumber = "-" // start a new negative number
    }
    else if (state.firstNumber && !state.operator) {
        state.operator = "-" // 
    }
    else if (!state.secondNumber  && state.operator) {
        state.secondNumber = "-" // start a new negative number
    }
    render()
}

function handleNumberInput(value) {
    // simply appends new numbers to the firstNumber state
    if (!state.operator) {
        state.firstNumber += value
    }
    else {
        state.secondNumber +=  value
    }
    render()
}

function handleOperatorInput(value){
    if (!state.operator && !state.secondNumber) {
        state.operator = value
    }
    render()
}

function operation() {
    let result 
    if (state.firstNumber && state.operator && state.secondNumber) {
        switch (state.operator) {
            case "x" :
                result = Number(state.firstNumber) * Number(state.secondNumber)
                break
            case "+":
                result = Number(state.firstNumber) + Number(state.secondNumber)
                break
            case "-":
                result = Number(state.firstNumber) - Number(state.secondNumber)
                break
            case "÷":
                result = Number(state.firstNumber) / Number(state.secondNumber)
                break
        }
    }
    return result 
}

function backSpace() { 
    if (!state.secondNumber && !state.operator) { // if operator and second number are empty
        state.firstNumber = state.firstNumber.slice(0, -1)
    }
    else if (!state.secondNumber && state.operator) { // if second number is empty and operator has a value
        state.operator = ""
    }
    else {
        state.secondNumber = state.secondNumber.slice(0, -1)
    }
    render()
} 

function resetCalculator() { // clears the states
    state.firstNumber = ""
    state.operator = ""
    state.secondNumber = ""
    render()
}

function handlePercentages(value) { // converts numbers to percentages
    // know what number we are dealing with
    if (!state.operator) {
        state.firstNumber += "%"
    }
    else {
        state.secondNumber += "%"
    }
    render()
}

function updateDisplay(event) {
    const clickedButton = event.target.closest("button")

    if (!clickedButton) return 

    const value = clickedButton.dataset.val

    // check negative number entered
    if (value === "-") {
        handleNegativeNumbers(value)
    }
    // check positive numbers and decimals
    else if (!isNaN(value) || value === ".") {
        handleNumberInput(value)
    }
    // check operator
    else if (value === "x" || value === "+" || value === "÷") {
        handleOperatorInput(value)
    }
    else {
        switch (value) {
            case "C":
                resetCalculator()
                break
            case "⌫":
                backSpace()
                break
            case "=":
                result = operation()
                if (result !== undefined) {
                    screenValue.textContent = result

                    state.firstNumber = result.toString()
                    state.operator = ""
                    state.secondNumber = ""
                }
                break
        }
    }
}

buttonContainer.addEventListener("click", (event) =>{
    updateDisplay(event)
})   