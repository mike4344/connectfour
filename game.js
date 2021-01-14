class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
    }
    getName(){
        return `player 1 ${this.name1} vs. player 2 ${this.name2}`
    }
}
