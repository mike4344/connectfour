import Game from './game.js';
let game = undefined;
function updateUI () {
    let boardHolder = document.getElementById('board-holder')
    if(game === undefined){
        boardHolder.classList.add('is-invisible')
    } else {
        let gameName = document.getElementById('game-name')
        gameName.innerHTML = game.getName()
        boardHolder.classList.remove('is-invisible')
    }
}

window.addEventListener("DOMContentLoaded", event => {
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
})
