import { MOUSE_CLICK } from "../data/constant.js";
import { dom } from "../dom.js";
import { reset } from "../handlers/reset.js";

export const restartGame = () => {
    dom.resetBtn.addEventListener(MOUSE_CLICK, (event) => {
        event.preventDefault();
        reset()
    });
};