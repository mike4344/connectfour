import Column from "./column.js"
import Game from "./game.js"

export default class ColumnWinInspector{
    constructor(column){

    }
    inspect(){
        let count = 0
        for(let i = 0; i < 7; i++){
            let current = column[i]
            let next = column[i+1]
            if (current === next){
            count ++
            if (count === 3){
                return current
            }
            }else{
            count = 0
            current = column[i + 1]
            }
        }
        return 0
    }
}
