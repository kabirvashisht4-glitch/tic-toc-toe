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
const x = document.querySelectorAll(".cell");
const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
];
function win() {
    ok = false
    for (let j of winPatterns) {
        let a = j[0]; 
        let b = j[1]; 
        let c = j[2];
        if (x[a].textContent !== "" && x[a].textContent === x[b].textContent && x[b].textContent === x[c].textContent) {
            ok = true
        } 
    }
    if (ok) {
        return true
    } else {
        return false
    }
}
function draw(){
    for(let q of x){
        if (q.textContent == "") {
            return false
        }
    }
    return true
}
let k = document.getElementById("bob");
k.addEventListener("click",function() {
    for (let p = 0; p < x.length; p++) {
        x[p].textContent = "";
    }
    c = "X"
    ik = false;
});
let c = "X"
ik = false
for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click",function() {
        if (ik == true) {
            return 
        }
        if (x[i].textContent == "") {
            x[i].textContent = c;
            if (win()) {
                let y = document.getElementById("h3")
                y.textContent = `Winner is ${c}`;
                ik = true;
            }
            if (ik){
                return
            }

            if (draw()){
                let r = document.getElementById("h3")
                r.textContent = `Draw hogya bkl`;
                ik = true;

            }
            switch(c) {
                case "X":
                    c = "O";
                    break
                case "O":
                    c = "X"
                    break
            
            }
        }
    });  

}































