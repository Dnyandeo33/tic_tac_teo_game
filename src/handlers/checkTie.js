import { dom } from "../dom.js";
import { checkScore } from "./checkScore.js";


export const checkTie = () => {
    let emptyCell = 0
    dom.gameCell.forEach(cell => {
        if (cell.textContent === "") {
            emptyCell++;
        }
    })
    return emptyCell === 0 && !checkScore();
}