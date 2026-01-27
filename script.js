
/* 1. Select all cells:
       Select all cells
       Add click event listener
       Console log the clicked cell

    2. Handle click
        Create a variable for current player, initially "X"
        On click, show X or O inside the cell
        Switch player after each click, currentPlayer==="X"?"0":"X";

    3. Check winner
        use this winning combinations array 
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        Check after every move (all the three index (of winPattern element) have same value)
        Log winner in console
    
    4. Draw the game
        How do we know board is full?
        Hint: loop through cells

    5. Restart game
        What needs reset?
        Cells
        Player turn

*/

