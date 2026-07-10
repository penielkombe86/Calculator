const buttonContainer = document.querySelector(".button-container")
const ROWS = 4
const COLUMNS = 4

function generateCalcBtns() {
    for (let i = 0;i < ROWS * COLUMNS; i++) {
        let button = document.createElement("button")
        buttonContainer.appendChild(button)
    }
}

generateCalcBtns()