import Column from './column.js'

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
    }
    getTokenAt(rowIndex, colIndex){
        return this.columns[colIndex].getTokenAt(rowIndex)

    }
    getName(){
        return `player 1 ${this.name1} vs. player 2 ${this.name2}`
    }
    playInColumn(columnIndex){
        this.columns[columnIndex].add(this.current)
        if(this.current === 1){
            this.current++
        } else {
            this.current--
        }
    }
    isColumnFull(columnIndex){
        return this.columns[columnIndex].isFull()
    }
}
 //module.export = Game
