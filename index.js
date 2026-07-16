// logic behind updating the screen:
// - keep track of the first No and second No and operator
// - 

const buttonContainer = document.querySelector(".button-container")
let screenValue = document.querySelector(".screen-value")

let firstNumber = ""
let  operator = ""
let  secondNumber = ""

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

function handleNumberInput(value) {
    if (!isNaN(value) || value === ".") { // check if the value clicked is a number or has decimal places 
        if (!operator) { // check if the operator is empty
            firstNumber += value
            screenValue.textContent = firstNumber
        } else {
            secondNumber += value
            screenValue.textContent = secondNumber
        }
    }
}

function handleOperatorInput(value) {
    if (!operator) { // check if the operator is empty
        if (value === "x" || value === "-" || value === "÷" || value === "+") {
            operator = value
            screenValue.textContent = operator
        }
    }  
}

function operation() {
    let result 
    if (firstNumber && operator && secondNumber) {
        switch (operator) {
            case "x" :
                result = Number(firstNumber) * Number(secondNumber)
                break
            case "+":
                result = Number(firstNumber) + Number(secondNumber)
                break
            case "-":
                result = Number(firstNumber) - Number(secondNumber)
                break
            case "÷":
                result = Number(firstNumber) / Number(secondNumber)
                break
        }
    }
    screenValue.textContent = result
}

function resetCalculator() {
    firstNumber = ""
    secondNumber = ""
    operator = ""
    screenValue.textContent = "0"

}

function updateDisplay(event) {
    const clickedButton = event.target.closest("button")

    if (!clickedButton) return 

    const value = clickedButton.dataset.val

    handleNumberInput(value)
    handleOperatorInput(value)
    
    if (value === "=") {
        operation()
    }
    if (value === "C") {
        resetCalculator()
    }
}

buttonContainer.addEventListener("click", (event) =>{
    updateDisplay(event)
})

