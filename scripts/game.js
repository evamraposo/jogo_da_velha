let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;

function handleMove(position) {
    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = isWin()

        if (!gameOver && playerTime == 0){
                playerTime = 1;
            } else {
                playerTime = 0;
        } 
    }
}

function isWin() {

    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winStates.length; i++){
        let state = winStates[i];

        let pos1 = state[0];
        let pos2 = state[1];
        let pos3 = state[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            let mensage = document.getElementById('gameover');
            mensage.innerHTML = `${board[pos1]} ganhou!`
            return true;
        }
    }
}