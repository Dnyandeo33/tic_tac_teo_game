export let turnMusic = new Audio("./assets/ting.mp3")
export let clapMusic = new Audio("./assets/clapMusic.mp3")
export let gameOverMusic = new Audio("./assets/gameover.mp3")


export let currentPlayer = "O"
export let nextPlayer = "X"
export let playerTurn = currentPlayer


export const changeTurn = () => {
    playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
}