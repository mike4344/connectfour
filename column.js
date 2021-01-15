export default class Column {
    constructor(){
        this.tokens = [null, null, null, null, null, null]; //columns

    }
    add(playerNum){
        for (let i = 5; i >= 0; i--){
           if(this.tokens[i] === null){
               this.tokens[i] = playerNum

               break
           }
        }
    }
    getTokenAt(rowIndex){ //
        return this.tokens[rowIndex] // this.tokens is our null array.
    }
    isFull(){
        if(this.tokens[0] !== null){
            return true
        }
    }
}
//module.export = Column
