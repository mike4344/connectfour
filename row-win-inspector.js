export default class RowWinInspector{
    constructor(column1, column2, column3, column4){
        this.column1 = column1
        this.column2 = column2
        this.column3 = column3
        this.column4 = column4
    }
    inspect(){
       // console.log(this.column1.tokens)
        for (let i = 0; i < 6; i++){
            if(this.column1.tokens[i] === this.column2.tokens[i] &&
               this.column3.tokens[i] === this.column4.tokens[i] &&
               this.column3.tokens[i] === this.column2.tokens[i] &&
               this.column1.tokens[i] !== null){
                return this.column1.tokens[i]; // returning the number either 1 or 2
            }
        }
        return 0; // if we go through all the arrays (rows)
    }
}

// if (0 < n < 10 )
