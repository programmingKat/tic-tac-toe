// first player (x) selects box
//box clicked (event listener)
// second player (o) 


//logic
//if currentplayer =1 inner text = X
    // else innertext = o

//reset function
//clear all cell values
let currentPlayer = 'X'

let allCells = document.querySelectorAll('div')
console.log(allCells)
allCells = Array.from(allCells)
console.log(allCells)
allCells.forEach(cell => {
    cell.addEventListener('click', () => 
        {
            if (cell.innerText != ''){
            return 
        }
        cell.innerText= currentPlayer
        checkForDraw()
        currentPlayer = currentPlayer == 'X'?'O':'X'
        // currentPlayer =
    } )
    
})

function checkForDraw(){
    let draw = allCells.every((element, index) => allCells[index].innerText == 'X' || allCells[index].innerText == 'O' )
    if (draw){
        alert('monkeys game')
    }
}