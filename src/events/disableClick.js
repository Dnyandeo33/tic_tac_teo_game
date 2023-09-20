import { MOUSE_CLICK } from "../data/constant.js";
import { dom } from "../dom.js";
import { handleClick } from "../handlers/handleClick.js";


export const disableClick = () => {
    dom.gameCell.forEach(cell => {
        cell.removeEventListener(MOUSE_CLICK, handleClick)
        cell.classList.add("highlight")
    })
};