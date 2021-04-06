let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black';

let intervalId = 0
// game elements
let fgX = 0, fg1X = 700, fgWidth = 700
let obstX = 1000, obstY = 200;
let pokeX = 50, pokeY = 230, pokeHeight = 150, pokeWidth = 100;
let isArrowUp = false, isArrowDown = false;
let currentScore = document.querySelector('#current span')
let score = 0
let gameOver = false, win = false
// menu element
let startBtn = document.getElementById('startBtn')
let restartBtn = document.querySelector('.restartBtn')
let winRestartBtn = document.querySelector("#winScr button")
let gameOverScr = document.getElementById('gameOver')
let startScreen = document.getElementById('startScr')
let winScr = document.getElementById('winScr')
let starter = ""
let first = document.getElementById('firstBall')
let Charmander = document.getElementById('charmander')
let second = document.getElementById('secondBall')
let Bulbasaur = document.getElementById('bulbasaur')
let third = document.getElementById('thirdBall')
let Squirtle = document.getElementById('squirtle')
let egg = document.getElementById('egg')
let pokename = document.querySelector('#confirm span')
let confirm = document.getElementById('confirm')
// music 
let audio = new Audio('images/05. Pokémon Gym - Evolution (Pokémon Red - Pokemon Blue).mp3')
let music = document.querySelector('#music span')
let musicBox = document.getElementById('music')
// .............................................

// animation
function animate() {

    draw()
    commands()
    collision()
    //obstacle animation
    let num = 0
    obstX -= 8
    if (obstX + obstacle.width < 0) {
        obstX = 700;
        num = Math.floor(Math.random() * 10);
        if (num > 5) {
            obstY = 200
            obstacle = rock
        } else {
            obstacle = rock1
            obstY = 320
        };
    };
    if (obstX < 10 && obstX >= -2) {
        score += 10
        currentScore.innerHTML = score
    };
    // foreground animation 
    fg1X -= 2
    fgX -= 2
    if (fgX + foreground.width < 0) {
        fgX = canvas.width - 2
    };
    if (fg1X + foreground1.width < 0) {
        fg1X = canvas.width - 2
    };

    // game over 
    if (gameOver == true) {
        canvas.style.display = 'none';
        gameOverScr.style.display = 'flex';
        intervalId = 0
    } else {
        intervalId = requestAnimationFrame(animate)
    };
    if (win == true) {
        cancelAnimationFrame(intervalId)
    }
}
// start button
function start() {

    startScreen.style.display = 'none'
    gameOverScr.style.display = 'none'
    canvas.style.display = 'block'

    let counter = 0
    let id = setInterval(() => {
        player = pokemon
    }, 400)
    let id1 = setInterval(() => {
        player = pokemon1
    }, 350)
    let id2 = setInterval(() => {
        player = pokemon2
    }, 300)

    animate()

}
// restart button
function restart() {
    obstX = 1000;
    pokeX = 50
    pokeY = 230
    score = 0
    currentScore.innerHTML = 0
    gameOver = false;
    startScreen.style.display = 'flex'
    gameOverScr.style.display = 'none'
    Charmander.style.display = 'none'
    Bulbasaur.style.display = 'none'
    Squirtle.style.display = 'none'
    confirm.style.display = 'none'
    first.style.display = 'inline'
    second.style.display = 'inline'
    third.style.display = 'inline'
    intervalId = 0
    winScr.style.display = "none"
    win = false
    egg.style.display='inline'
}



window.addEventListener('load', () => {


    draw()
    commands()
    // audio.play()
    confirm.style.display = 'none'
    canvas.style.display = 'none'
    gameOverScr.style.display = 'none'
    winScr.style.display = 'none'
    Charmander.style.display = 'none'
    Bulbasaur.style.display = 'none'
    Squirtle.style.display = 'none'


    musicBox.addEventListener('click', () => {
        if (music.innerHTML == 'On') {
            music.innerHTML = "Off"
            music.style.color = 'red'
            audio.pause()
        } else if (music.innerHTML == "Off") {
            audio.play()
            music.innerHTML = "On"
            music.style.color = 'green'
        }
    })

    startBtn.style.display = 'none'
    startBtn.addEventListener('click', () => {
        start()
    })


    restartBtn.addEventListener('click', () => {
        restart()
    })
    winRestartBtn.addEventListener('click', () => {
        restart()

    })

})
