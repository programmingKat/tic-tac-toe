// first player (x) selects box
//box clicked (event listener)
// second player (o) 

// class Game(){
//     constructor(){

//     }
// }

// class Player{
//     constructor(){
//         this
//     }

//     checkForDraw(){

//     }
//     checkForWin(){

//     }
// }

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
    cell.addEventListener('click', () => {
        if (cell.innerText != '') {
            return
        }
        cell.innerText = currentPlayer
        checkForDraw()
        checkForWin()
        currentPlayer = currentPlayer == 'X' ? 'O' : 'X'

        // currentPlayer =
    })

})

function checkForDraw() {
    let draw = allCells.every((element, index) => cellFilled(index))
    if (draw) {
        alert('monkeys game')
    }
}

function checkForWin() {
    //Index wins for tictactoe
    // 036 147 258 012 345 678 246 018
    if (cellFilled(0) && allCells[0].innerText === allCells[3].innerText && allCells[3].innerText === allCells[6].innerText) {
        alert('you win')
    }
    else if (cellFilled(1) && allCells[1].innerText === allCells[4].innerText && allCells[4].innerText === allCells[7].innerText) {
        alert('you win')
    }
    else if (cellFilled(2) && allCells[2].innerText === allCells[5].innerText && allCells[5].innerText === allCells[8].innerText) {
        alert('you win')
    }
    else if (cellFilled(0) && allCells[0].innerText === allCells[1].innerText && allCells[1].innerText === allCells[2].innerText) {
        alert('you win')
    }
    else if (cellFilled(3) && allCells[3].innerText === allCells[4].innerText && allCells[4].innerText === allCells[5].innerText) {
        alert('you win')
    }
    else if (cellFilled(6) && allCells[6].innerText === allCells[7].innerText && allCells[7].innerText === allCells[8].innerText) {
        alert('you win')
    }
    else if (cellFilled(2) && allCells[2].innerText === allCells[4].innerText && allCells[4].innerText === allCells[6].innerText) {
        alert('you win')
    }
    else if (cellFilled(0) && allCells[0].innerText === allCells[4].innerText && allCells[4].innerText === allCells[8].innerText) {
        alert('you win')
    }
}
function cellFilled(index) {
    return allCells[index].innerText == 'X' || allCells[index].innerText == 'O'
}
// 147
// 258
// 012
// 345
// 678
// 246
// 018
