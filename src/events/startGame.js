import { MOUSE_CLICK } from "../data/constant.js"
import { dom } from "../dom.js"
import { handleClick } from "../handlers/handleClick.js"

export const startGame = () => {
    dom.gameCell.forEach(cell => {
        cell.addEventListener(MOUSE_CLICK, handleClick)
    })
}