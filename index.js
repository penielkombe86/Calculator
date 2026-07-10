const buttonContainer = document.querySelector(".button-container")
const ROWS = 5
const COLUMNS = 4

const calcBtnIcons = [
  "C",   "⌫",  "%",  "÷",
  "7",   "8",   "9",  "×",
  "4",   "5",   "6",  "-",
  "1",   "2",   "3",  "+",
  "0",   ".",   "+/-", "="
];

function generateCalcBtns() {
    for (let i = 0;i < calcBtnIcons.length; i++) {
        let button = document.createElement("button")
        let span = document.createElement("span")
        
        span.textContent = calcBtnIcons[i]
        span.classList.add("btn-icon")

        button.appendChild(span)
        buttonContainer.appendChild(button)
    }
}

generateCalcBtns()