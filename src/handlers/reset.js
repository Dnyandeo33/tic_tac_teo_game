import { clapMusic } from "../data/vairables.js";
import { dom } from "../dom.js";
import { startGame } from "../events/startGame.js";

export const reset = () => {
    dom.alertBox.textContent = "Hello"
    clapMusic.pause()
    dom.gameCell.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("highlight")
    })
    startGame()
};

