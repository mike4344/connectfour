

import Game from './game.js';

let game = undefined;

function updateUI () {
    let boardHolder = document.getElementById('board-holder')
    if(game === undefined){ // does not exist
        boardHolder.classList.add('is-invisible')
    } else {
        let gameName = document.getElementById('game-name')
        gameName.innerHTML = game.getName() // string of name1 vs. name2
        boardHolder.classList.remove('is-invisible')
        let clickTarget = document.getElementById("click-targets")
        if (game.current === 1){
            clickTarget.classList.add("black") //css class
            clickTarget.classList.remove("red")
        } else { // if it's 2
            clickTarget.classList.add("red") // switching the colors
            clickTarget.classList.remove("black")

        }
        for(let i = 0; i < 7; i++) {
            let checkColumn = document.getElementById(`column-${i}`)
        }
        for (let rowIndex = 0; rowIndex <= 5; rowIndex++){
            for (let colIndex = 0; colIndex <= 6; colIndex++){
                let square = document.querySelector(`#square-${rowIndex}-${colIndex}`)
                square.innerHTML = ""
                const playerNumber = game.getTokenAt(rowIndex, colIndex)  // from game.js to find us that square and return to us what the value of the spot
                if(playerNumber === 1){
                    let token = document.createElement("div")
                    token.classList.add("token") //
                    token.classList.add("black")
                    square.appendChild(token)
                } else if (playerNumber === 2){
                    let token = document.createElement("div")
                    token.classList.add("token") //
                    token.classList.add("red")
                    square.appendChild(token)
                }


            }
        }
    }
}

window.addEventListener("DOMContentLoaded", event => {
    let clickTarget = document.getElementById("click-targets")
    let playerName1 = document.getElementById("player-1-name")
    let playerName2 = document.getElementById("player-2-name")
    let newGame = document.getElementById("new-game")
    let formHolder = document.getElementById("form-holder")

    newGame.addEventListener("click", event => {
        game = new Game(playerName1.value, playerName2.value);
        updateUI()

    })
    formHolder.addEventListener('keyup', event => {
        console.log("asdf")
        if ((playerName1.value) && (playerName2.value)){
            //newGame.removeAttribute("disabled")
            newGame.disabled = false
        } else {
            //newGame.setAttribute("disabled", )
            newGame.disabled = true
        }
        updateUI()
    })
    clickTarget.addEventListener("click", event => {
        let targetId = event.target.id // gives us the id of whatever we click on
        if(!targetId.startsWith("column-")){ // if the thing we click on doesn't with column-, then we're just going to exit this func. checks to see if they click on the board slots.
            return;
        }
        const columnIndex = Number.parseInt(targetId[targetId.length-1]) // changing "0" into a number 0.

        game.playInColumn(columnIndex) // updates the current players turn ++ --
        updateUI()
    })
})
