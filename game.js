import Column from './column.js'
import ColumnWinInspector from './columnWinInspector.js'
import RowWinInspector from './row-win-inspector.js'
import DiagonalWinInspector from './diagonalWinInspector.js'
export default class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.current = 1;
        this.columns = [
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column()
        ];
        this.winnerNumber = 0
    }
    getTokenAt(rowIndex, colIndex){
        return this.columns[colIndex].getTokenAt(rowIndex)

    }
    getName(){
        if(this.winnerNumber === 3){
            return `player 1 ${this.name1} ties with player 2 ${this.name2}`
        } else if(this.winnerNumber === 1) {
            return `player 1 ${this.name1} is the winner!`

        } else if(this.winnerNumber === 2){
            return `player 2 ${this.name2} is the winner!`
        }
        return `player 1 ${this.name1} vs. player 2 ${this.name2}`
    }
    playInColumn(columnIndex){
        this.columns[columnIndex].add(this.current)
        if(this.current === 1){
            this.current++
        } else {
            this.current--
        }
        this.checkForTie()
        this.checkForColumnWin()
        this.checkForRowWin()
        this.checkForDiagonalWin()
    }
    isColumnFull(columnIndex){
        if(this.winnerNumber === 1 || this.winnerNumber === 2){
            return true;
        }
        return this.columns[columnIndex].isFull()
    }
    checkForTie() {
        let isTie = true
        for (let i = 0; i < 7; i++) {
          if(!this.isColumnFull(i)){
            isTie = false
        }

    }
    if (isTie){
        this.winnerNumber = 3
    }
    }
    checkForColumnWin(){
            for(let i = 0; i < 7; i++){
                if(this.winnerNumber !== 0){ // 1 or 2, we ahve a winner
                    return;
                }

                let columnWinCheck = new ColumnWinInspector(this.columns[i])
                let columnWinner = columnWinCheck.inspect() // 0 or 1 or 2
                this.winnerNumber = columnWinner //which will set winnerNumber to 1 or 2
            }
        }
    checkForRowWin(){
        for (let i = 0; i < 4; i++){
            if(this.winnerNumber !== 0){
                 return
            }
            let rowWinCheck = new RowWinInspector(this.columns[i], this.columns[i + 1], this.columns[i+2], this.columns[i +3])
            let rowWinner = rowWinCheck.inspect()

            this.winnerNumber = rowWinner
        }
    }
    checkForDiagonalWin(){

    for (let i = 0; i < 4; i++){
        if(this.winnerNumber !== 0){
             return
        }
        let diagonalWinCheck = new DiagonalWinInspector(this.columns[i], this.columns[i + 1], this.columns[i+2], this.columns[i +3])
        let diagonalWinner = diagonalWinCheck.inspect()

        this.winnerNumber = diagonalWinner
    }
    }
    }

 //module.export = Game
