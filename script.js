//TODO
// RESET BUTTON
// document that keeps score of game

cells = document.querySelectorAll(".cell");
const startButton = document.querySelector('#start');

startButton.addEventListener("click", function(){
startGame();
});

function startGame(){    
    const player1Name = document.querySelector('#player1').value;
    const player2Name = document.querySelector('#player2').value;
     const  p1 = createPlayer(player1Name, "X");
     const p2 = createPlayer(player2Name, "O");
     gameController(p1, p2);
   
  }

//game controller
function gameController(player1, player2){
let isPlayer1 = true;
let moves =0;

cells.forEach(cell => {
    cell.addEventListener("click", function(){
        let currentPlayer = isPlayer1? player1 : player2;
        cell.textContent=currentPlayer.symbol;
        cell.classList.add('clicked'); // add class to make button disabled. 'cell.disable = true' was greying out button text 
        checkWinner(currentPlayer);

        isPlayer1 = !isPlayer1;
        moves++;
        console.log(moves);

    });
});

};


function Player(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }


function createPlayer(name, symbol){

    return new Player(name, symbol);
}



    function checkWinner(currentPlayer){
        symbol = currentPlayer.symbol;
        let name = currentPlayer.name;

        const winningCombinations = [
       
            // Rows
            ["cell-00", "cell-01", "cell-02"],
            ["cell-10", "cell-11", "cell-12"],
            ["cell-20", "cell-21", "cell-22"],
            // Columns
            ["cell-00", "cell-10", "cell-20"],
            ["cell-01", "cell-11", "cell-21"],
            ["cell-02", "cell-12", "cell-22"],
            // Diagonals
            ["cell-00", "cell-11", "cell-22"],
            ["cell-02", "cell-11", "cell-20"]
        ];


        // iterate through winningCombination arrays to see if win condition has been met on buttons
        for(x of winningCombinations){
            if(
                document.getElementById(x[0]).textContent==symbol &&
                document.getElementById(x[1]).textContent==symbol &&
                document.getElementById(x[2]).textContent==symbol
            ){
                // but in text to DOM
                alert(name + " wins!")
                cells.forEach(cell => {
                    cell.disabled=true;
                });

            }
        }


    }

