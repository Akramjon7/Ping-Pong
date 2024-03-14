const player1 = document.querySelector('.Player1');
const player2 = document.querySelector('.Player2');
const select = document.querySelector('.select');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const reset = document.querySelector('.reset');

let sc1ore = 0;
let sc2ore = 0;
let gameLevel = select.value;
let gameOver = true
btn1.addEventListener('click', () => {
    sc1ore++
    if (gameOver) {
        if (sc1ore == gameLevel) {
            gameOver = false;
            player1.style.color = 'lime'
            player2.style.color = 'crimson'
        }
        player1.textContent = sc1ore;
    }
})


btn2.addEventListener('click', () => {
    sc2ore++
    if (gameOver) {
        if (sc2ore == gameLevel) {
            gameOver = false;
            player1.style.color = 'crimson'
            player2.style.color = 'lime'
        }
        player2.textContent = sc2ore;
    }
})


select.addEventListener('change', refleshing)

reset.addEventListener('click', refleshing)


function refleshing(){
    player1.textContent = 0
    player2.textContent = 0
    player1.style.color = 'black'
    player2.style.color = 'black'
    gameOver = true
    sc1ore = 0;
    sc2ore = 0;
    gameLevel = select.value;
}