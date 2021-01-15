import Column from './column.js'
import ColumnWinInspector from './columnWinInspector.js'
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
    }
    isColumnFull(columnIndex){
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
        if(this.winnerNumber !== 0){
            return
        } else {
            for(let i = 0; i < 7; i++){
                let columnWinCheck = new ColumnWinInspector(this.columns[i])
                let columnWinner = columnWinCheck.inspect()
                
            }
        }
    }
}
 //module.export = Game
