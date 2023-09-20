import { winingBox } from "../data/data.js";
import { dom } from "../dom.js";

export const checkScore = () => {
    for (let i = 0; i < winingBox.length; i++) {
        const [p1, p2, p3] = winingBox[i];

        if (dom.gameCell[p1].textContent !== "" &&
            dom.gameCell[p1].textContent === dom.gameCell[p2].textContent &&
            dom.gameCell[p2].textContent === dom.gameCell[p3].textContent) {
            return true
        }
    }
};
