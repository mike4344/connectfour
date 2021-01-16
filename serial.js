 export default class Serializer{
constructor(game){
    this.game = game;
}
serialize(){
    let data = {
        name1 : this.game.name1,
        name2 : this.game.name2,
        tokens: [[], [], [], [], [], []]
    }
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++){
            let token = this.game.getTokenAt(i, j);
            data.tokens[i][j] = token
        }
    }
    return JSON.stringify(data)
}
}
