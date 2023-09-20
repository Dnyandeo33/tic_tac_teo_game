import { dom, startGame } from "../dom.js";

export const reset = () => {
    dom.alertBox.textContent = "Hello"
    dom.gameCell.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("highlight")
    })
    startGame()
};

