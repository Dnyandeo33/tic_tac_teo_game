import { dom } from "../dom.js";

export const showAlert = (msg) => {
    dom.alertBox.style.display = "block"
    dom.alertBox.textContent = msg
};