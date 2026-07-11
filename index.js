const buttonContainer = document.querySelector(".button-container")

const calcBtnObject = [
    {id: "clear", icon: "C"},
    {id: "delete", icon: "⌫"},
    {id: "percent", icon: "%"},
    {id: "divide", icon: "÷"},
    {id: "seven", icon: "7"},
    {id: "eight", icon: "8"},
    {id: "nine", icon: "9"},
    {id: "multiply", icon: "×"},
    {id: "four", icon: "4"},
    {id: "five", icon: "5"},
    {id: "six", icon: "6"},
    {id: "minus", icon: "-"},
    {id: "one", icon: "1"},
    {id: "two", icon: "2"},
    {id: "three", icon: "3"},
    {id: "plus", icon: "+"},
    {id: "one", icon: "1"},
    {id: "zero", icon: "0"},
    {id: "decimal", icon: "+/-"},
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
        buttonContainer.appendChild(button)
    }
}

generateCalcBtns()

//buttonContainer.addEventListener("click")