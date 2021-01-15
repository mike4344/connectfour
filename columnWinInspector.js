import Column from "./column.js"
import Game from "./game.js"

export default class ColumnWinInspector{
    constructor(column){
        this.column = column;
    }
    inspect(){
        let count = 0
        for(let i = 0; i < 6; i++){
            let current = this.column.tokens[i]
            let next = this.column.tokens[i+1]
            if (current === next && current !== null){
                count++;

                if (count === 3){
                    console.log(current)
                    return current
                }
            } else {
                count = 0
                current = this.column.tokens[i + 1]
            }
        }
        return 0
    }
}
