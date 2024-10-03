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
const player2= createPlayer();
let moves =0;

console.log(gameboard);

while(moves < 2){ //9
 let currentPlayer = isPlayer1? player1 : player2;
 let choice = prompt(currentPlayer.name + " please choose position (row,col)");
 let input = choice.split(",");
gameboard[input[0]][input[1]] = currentPlayer.symbol;

isPlayer1 = !isPlayer1;
moves++;
}

console.log(gameboard);

})();


function Player(name, symbol) {
    this.name = name;
    this.symbol =symbol;
  }


function createPlayer(){
    playerName = prompt("Enter player's name");
    playerSymbol = prompt("Enter " + playerName+ "'s symbol");

    return new Player(playerName, playerSymbol);
}

function checkWinner(){

}