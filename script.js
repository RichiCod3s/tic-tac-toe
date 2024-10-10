//TODO
// RESET BUTTON


let moves =0; // keeps track of how many moves made
const cells = document.querySelectorAll(".cell");
const modal = document.querySelector("#modal");
const winnerModal = document.querySelector("#winner-modal");
modal.showModal();
const startButton = document.querySelector('#start');
const restartButton = document.querySelector('#restart');
const winnerDisplay = document.querySelector("#winner-display");

startButton.addEventListener("click", function(){
    p1box = document.querySelector("#player1Box");
    p2box = document.querySelector("#player2Box");
    if(p1box.value.trim() != "" && p2box.value.trim() !=""){
        startGame();
        modal.close();
        
    }else{
        alert("Please enter in player names")
    }
});

function startGame(){    
    const player1Name = document.querySelector('#player1Box').value;
    const player2Name = document.querySelector('#player2Box').value;
     const  p1 = createPlayer(player1Name, "X");
     const p2 = createPlayer(player2Name, "O");
     keepScore(p1,p2);
     gameController(p1, p2);
  }

//game controller
function gameController(player1, player2){
let isPlayer1 = true;

cells.forEach(cell => {
    cell.addEventListener("click", function(){
        let currentPlayer = isPlayer1? player1 : player2;
        cell.textContent=currentPlayer.symbol;
        cell.classList.add('clicked'); // add class to make button disabled. 'cell.disable = true' was greying out button text 
        checkWinner(currentPlayer);
        keepScore(player1, player2);
        moves++;
        // no winner at the end of the game then draw
        if(moves == 9 && checkWinner(player1,player2) == false){
            winnerModal.showModal();
            winnerDisplay.innerHTML= "It's a draw!";
        }

        isPlayer1 = !isPlayer1;
       
        console.log(moves);

    });
});

};


function Player(name, symbol) {
    this.name = name;
    this.symbol = symbol;
    this.score= 0;
  }


function createPlayer(name, symbol){

    return new Player(name, symbol);
}



    function checkWinner(currentPlayer){
        symbol = currentPlayer.symbol;
        let name = currentPlayer.name;
        let winner = false; // return if there is a winner
       
         
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
                // put in text to DOM
                winnerModal.showModal();
                winnerDisplay.innerHTML = name + " wins!";
                winner=true;
                cells.forEach(cell => {
                    // clicked class cannot be clicked again
                    cell.classList.add('clicked'); 
                });
                currentPlayer.score++;
            }
        }
        return winner;
    }

    // prints score to page
    function keepScore(player1, player2){   
        score = document.querySelector(".score");
        score.innerHTML = player1.name + ": " + player1.score +" "+ player2.name + ": " + player2.score;
    }


    //restarts the game
    restartButton.addEventListener("click", function(){
        // reset all buttons(cells)
        cells.forEach(cell => {
            cell.textContent="";
            cell.classList.remove('clicked');  // remove the class so css does not make the button unclickable
        });
        winnerModal.close();
        // reset number of moves to 0
        moves =0;
        // restart gameController
        gameController(p1, p2);
    });

 