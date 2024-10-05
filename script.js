// 3x3 grid gameboard - where the game will be played
const gameboard = (function (){
const rows =3;
const colums =3;
const board = [];

for(let i =0; i<rows; i++){
    board[i]=[];
    for(let j =0; j<colums; j++){
        board[i][j]= i +"" +j;
    }
}

return board;
})();


// draw the board to console
const drawBoard = (function (){

})(); // may need to remove the () later


//game controller
const gameContoller = (function (){
let isPlayer1 = true;
const player1 = createPlayer();
player1.symbol= "X";
const player2= createPlayer();
player2.symbol="O";
let moves =0;

console.log(gameboard);

while(moves < 6){ //9
 let currentPlayer = isPlayer1? player1 : player2;
 let choice = prompt(currentPlayer.name + " please choose position (row,col)");
 let input = choice.split(",");
gameboard[input[0]][input[1]] = currentPlayer.symbol;
checkWinner(currentPlayer);


isPlayer1 = !isPlayer1;
moves++;

}

console.log(gameboard);

})();


function Player(name) {
    this.name = name;
    this.symbol;
  }


function createPlayer(){
    playerName = prompt("Enter player's name");
    return new Player(playerName);
}

function checkWinner(currentPlayer){
    symbol = currentPlayer.symbol;
    let name = currentPlayer.name;

    //Win condition
    //horizontal
if(gameboard[0][0] == symbol && gameboard[0][1] == symbol && gameboard[0][2] == symbol){
    alert(name + " wins!");
}
if(gameboard[1][0] == symbol && gameboard[1][1] == symbol && gameboard[1][2] == symbol){
    alert(name + " wins!");
}
if(gameboard[2][0] == symbol && gameboard[2][1] == symbol && gameboard[2][2] == symbol){
    alert(name + " wins!");
}

    //vertical
if(gameboard[0][0] == symbol && gameboard[1][0] == symbol && gameboard[2][0] == symbol){
    alert(name + " wins!");
}
if(gameboard[0][1] == symbol && gameboard[1][1] == symbol && gameboard[2][1] == symbol){
    alert(name + " wins!");
}
if(gameboard[0][2] == symbol && gameboard[1][2] == symbol && gameboard[2][2] == symbol){
    alert(name + " wins!");
}

 //diagonal
 if(gameboard[0][0] == symbol && gameboard[1][1] == symbol && gameboard[2][2] == symbol){
    alert(name + " wins!");
}
if(gameboard[0][2] == symbol && gameboard[1][1] == symbol && gameboard[2][0] == symbol){
    alert(name + " wins!");
}

} 