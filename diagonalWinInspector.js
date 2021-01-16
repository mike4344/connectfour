export default class DiagonalWinInspector{
    constructor(column1, column2, column3, column4){
        this.column1 = column1;
        this.column2 = column2;
        this.column3 = column3;
        this.column4 = column4;

    }
    inspect(){

        for(let i = 0; i < 7; i++){

           if(this.column1.tokens[i] === this.column2.tokens[i+1] &&
            this.column3.tokens[i+2] === this.column4.tokens[i+3]&&
            this.column2.tokens[i+1] === this.column3.tokens[i + 2]||
            this.column1.tokens[i] === this.column2.tokens[i-1] &&
            this.column3.tokens[i-2] === this.column4.tokens[i-3]&&
            this.column4.tokens[i-3] === this.column1.tokens[i] &&
            this.column1.tokens[i] !== null
            ){
                //console.log(this.column1.tokens[i], this.column2.tokens[i+1], this.column3.tokens[i+2], this.column4.tokens[i+3])
                if(this.column1.tokens[i] !== null && this.column1.tokens[i] !== undefined){

                    console.log(this.column1.tokens[i]);
                    return this.column1.tokens[i]
                }

            }

        }
        return 0
    }
}
