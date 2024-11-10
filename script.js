/* [1] Initialization Stage */
const board = Array(9).fill(null); 
const winnerMessage = document.getElementById("winnerMessage"); 
let currentPlayer = 'X'; // Tracks the current player ('X' or 'O')

/* 
<- Notes ->
- Array(9) fills the array as null (empty)
- Getting the html of winnerMessage
- X starts by default
*/

/* [2] Defining Winning Combinations Using an Array */
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Row Combo
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Column Combo
    [0, 4, 8], [2, 4, 6]             // Diagonal Combo
];

/* [3] Defining Winning Combinations Using an Array */

  


