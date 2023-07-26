document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){

    let square = event.target;
    let position = square.id;

    handleMove(position);
    updateSquares(position);
}

function updateSquares(position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
    }

let button = document.getElementById('restart')
button.addEventListener('click', restartGame);

function restartGame(){
    window.location.reload();
}