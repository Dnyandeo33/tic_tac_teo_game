import { MOUSE_CLICK } from "./data/constant.js"
import { handleClick } from "./handlers/handleClick.js"

export const dom = {
    resetBtn: document.querySelector("#resetBtn"),
    title: document.querySelector('.title'),
    alertBox: document.querySelector(".alertBox"),
    gameCell: document.querySelectorAll(".square")
}

export let turnMusic = new Audio("./assets/ting.mp3")
export let clapMusic = new Audio("./assets/clapMusic.mp3")
export let gameOverMusic = new Audio("./assets/gameover.mp3")



export let currentPlayer = "O"
export let nextPlayer = "X"
export let playerTurn = currentPlayer


export const startGame = () => {
    dom.gameCell.forEach(cell => {
        cell.addEventListener(MOUSE_CLICK, handleClick)
    })
}


export const changeTurn = () => {
    playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
}

startGame()