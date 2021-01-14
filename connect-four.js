import Game from './game.js';

let game = undefined;

function updateUI () {
    let boardHolder = document.getElementById('board-holder')
    if(game === undefined){ // does not exist
        boardHolder.classList.add('is-invisible')
    } else {
        let gameName = document.getElementById('game-name')
        gameName.innerHTML = game.getName()
        boardHolder.classList.remove('is-invisible')
        if (game.current === 1){
            clickTarget.classList.add("black") //css class
            clickTarget.classList.remove("red")
        } else { // if it's 2
            clickTarget.classList.add("red") // switching the colors 
            clickTarget.classList.remove("black")
        }
    }
}

window.addEventListener("DOMContentLoaded", event => {
    let clickTarget = document.getElementById("click-targets")
    let playerName1 = document.getElementById("player-1-name")
    let playerName2 = document.getElementById("player-2-name")
    let newGame = document.getElementById("new-game")
    let formHolder = document.getElementById("form-holder")

    formHolder.addEventListener('keyup', event => {
        if ((playerName1.value) && (playerName2.value)){
            newGame.disabled = false
        } else {
            newGame.disabled = true
        }
        updateUI()
    })
    clickTarget.addEventListener("click", event => {
        game.playInColumn() // updates the current players turn ++ --
        updateUI()
    })
})
