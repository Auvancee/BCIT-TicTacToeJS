/* [1] Initialization Stage */
const board = Array(9).fill(null); 
const winnerMessage = document.getElementById("winnerMessage"); 
let currentPlayer = 'X'; // Tracks the current player ('X' or 'O')

/*  [1.1] ← Notes → 
- Array(9) fills the array as null (empty)
- Getting the html of winnerMessage
- X starts by default */

/* [2] Defining Winning Combinations Using an Array */
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Row Combo
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Column Combo
    [0, 4, 8], [2, 4, 6]             // Diagonal Combo
];

/* [2.1] ← Notes → 
- The 1st row of arrays; show the combination of row wins in tic-tac-toe
- The 2nd row of arrays; show the combination of column wins in tic-tac-toe
- The 3rd row of arrays; show the combination of diagonal wins in tic-tac-toe

Each cell of the game-board (9 squares), start from index of 0 - 9. */

/* [3] Cell Handling On Click Event */
function cellClick(innerCells) {
    if (board[innerCells] === null) { 
      board[innerCells] = currentPlayer; 
      document.getElementById(`cell-${innerCells}`).textContent = currentPlayer; // Display the move in HTML
  
      if (checkWin()) { // Check if the current player won
        winnerMessage.textContent = `${currentPlayer} wins!`;
        winnerMessage.style.display = "block"; // Show the winner message
      } else if (!board.includes(null)) { // If no empty cells remain, it's a tie
        winnerMessage.textContent = "It's a tie!";
        winnerMessage.style.display = "block"; // Show tie message
      } else { // Switch turns if no win or tie
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Toggle the player
      }
    }
}

/* [3.1] ← Notes → 
l26 - Created a function 'cellClick' with a parameter 'innerCells'
l27 - It first checks if the cells within the board are empty. 
l28+29 - If it is empty, that specific cell which has been clicked will 
        update with the current player's symbol.

l31 - We have a checkWin Function condition, a follow up from cellClick.
    This checks to see if the current player X or O has won. If neither won, it will output as 'Tie!'.
    If all else fails, the current player will switch turns whichever is last played. */

  


