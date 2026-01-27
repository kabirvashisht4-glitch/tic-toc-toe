

const cells = document.getElementsByClassName("cell") ; // 9 div
const winner = document.querySelector("h3");
let currentPlayer = "X";
// cells[8].textContent = "X" ;
for(let cell of cells){
    cell.addEventListener("click" , function(){
        // console.log(cell);
        if(winner.textContent == "X" || winner.textContent == "O" ||
            cell.textContent == "X" || cell.textContent == "O"
        ){
            return ;
        }
        cell.textContent = currentPlayer ;
        currentPlayer = currentPlayer == "X" ? "O" : "X" ;
        
        let value = checkWinner(); // X
        if(value){
            winner.textContent = value ;
            return ;
        }

        if(checkDraw()){
            winner.textContent = "Its a Draw";
            return ;
        }
    })
}

function checkWinner(){
    const winPatterns = [
            [0, 1, 2], // 1st 0 = X , 1 = O, 2 = X
            [3, 4, 5], // 3 = X , 4 = X , 5 = X 
            [6, 7, 8],
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8],
            [0, 4, 8], 
            [2, 4, 6]
        ];
        for(let pattern of winPatterns){
            let first = pattern[0];
            let second = pattern[1];
            let third = pattern[2] ;
            let a = cells[first].textContent ;
            let b = cells[second].textContent ;
            let c = cells[third].textContent ;
            if(a == b && b == c && a != ""){
                return a ;
            }
        }
        return false ;
    }

    function checkDraw(){
        for(let cell of cells){
            if(cell.textContent == ""){
                return false ;
            }
        }
        return true ;
    }


    document.querySelector("button").addEventListener("click" , function(){
        for(let cell of cells){
            cell.textContent = "";
        }
        currentPlayer = "X"
        winner.textContent = "Winner" ;
    })
    // let a = cells[0].textContent ;
    // let b = cells[1].textContent ;
    // let c = cells[2].textContent ;
    // let a = cells[3].textContent ;
    // let b = cells[4].textContent ;
    // let c = cells[5].textContent ;
    // let a = cells[0].textContent ;
    // let b = cells[3].textContent ;
    // let c = cells[6].textContent ;
    // if(a == b && b == c && a != ""){
    //     return a ;
    // }else {
    //     return false ;
    // }


// winner -> if(cells[0].innerText == cells[1].innerText &&
//  cells[0].innerText == cells[2].innerText &&
//. cells[0].innerText !== ""){
//     cells[0].innerText -> wins
// }
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

