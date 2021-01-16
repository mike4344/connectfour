import Game from './game.js';
export default class Deserializer {
    constructor(json) {
        this.json = json;
    }
 deserialize(){
     let data = JSON.parse(this.json)
     console.log(data)
    let game = new Game(data.name1, data.name2)
    let colIndex = [5, 5, 5, 5, 5, 5, 5]
    let playerTurn = 1
    while(colIndex.some(x => x !== -1)){
        for (let i = 0; i < 7; i++){
            let row = colIndex[i]
            if(row === -1)continue
            let token = data.tokens[row][i]
            if(token === null){
                colIndex[i] = -1
            }
            if (token === playerTurn) {
                game.playInColumn(i)
                colIndex[i] -=1
                if(playerTurn === 1){
                    playerTurn = 2
                } else {
                    playerTurn = 1
                }
            }
        }
    }
    return game
 }
}
