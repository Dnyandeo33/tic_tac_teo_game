import { changeTurn, clapMusic, gameOverMusic, playerTurn, turnMusic } from "../dom.js"
import { disableClick } from "../events/disableClick.js"
import { checkScore } from "./checkScore.js"
import { checkTie } from "./checkTie.js"
import { showAlert } from "./showAlert.js"

export const handleClick = (e) => {
    if (e.target.textContent === "") {
        e.target.textContent = playerTurn
        if (checkScore()) {
            showAlert(`${playerTurn} Wins !!`)
            clapMusic.play()
            disableClick()
        } else if (checkTie()) {
            showAlert("Draw!!")
            gameOverMusic.play()
            disableClick()
        } else {
            changeTurn()
            turnMusic.play()
            showAlert(`${playerTurn} : Now your turn`)
        }
    }
}