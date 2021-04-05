let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black';

let intervalId = 0
// game elements
let fgX = 0, fg1X = 700, fgWidth = 700
let obstX = 700, obstY = 200;
let pokeX = 50, pokeY = 230, pokeHeight = 150, pokeWidth = 100;
let isArrowUp = false, isArrowDown = false;
let currentScore = document.querySelector('#current span')
let score = 0
let gameOver = false
// menu element
let startBtn = document.getElementById('startBtn')
let restartBtn = document.getElementById('restartBtn')
let gameOverScr = document.getElementById('gameOver')
let startScreen = document.getElementById('startScr')
let starter = ""
let first = document.getElementById('firstBall')
let charmander = document.getElementById('charmander')
let second = document.getElementById('secondBall')
let bulbasaur = document.getElementById('bulbasaur')
let third = document.getElementById('thirdBall')
let squirtle = document.getElementById('squirtle')
let pokename = document.querySelector('#confirm span')
let confirm = document.getElementById('confirm')
// music 
let audio = new Audio('/Gotta-Win-Em-All-provisory-/images/05. Pokémon Gym - Evolution (Pokémon Red - Pokemon Blue).mp3')
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
    // foreground animation 
    fg1X -= 2
    fgX -= 2
    if (fgX + foreground.width < 0) {
        fgX = canvas.width
    };
    if (fg1X + foreground1.width < 0) {
        fg1X = canvas.width
    };
    stages()
    // game over 
    if (gameOver == true) {
        canvas.style.display = 'none';
        gameOverScr.style.display = 'flex';
        intervalId = 0
        startScreen.style.display = 'none';
    } else {
        intervalId = requestAnimationFrame(animate)
    };
    if (obstX < 20 && obstX > 0) {
        score += 10
        currentScore.innerHTML = score
    };
}
// start button
function start() {
    if (starter == "Charmander") {
        pokemon = charmander
        pokemon1 = charmander
        pokemon2 = charmander
    }
    else if (starter == "Bulbasaur") {
        pokemon = bulbasaur
        pokemon1 = bulbasaur
        pokemon2 = bulbasaur
    }
    else if (starter == "Squirtle") {
        pokemon = squirtle
        pokemon1 = squirtle
        pokemon2 = squirtle
    }
    startScreen.style.display = 'none'
    gameOverScr.style.display = 'none'
    canvas.style.display = 'block'
    animate()

}
// restart button
function restart() {
    obstX = 800;
    pokeX = 50
    pokeY = 230
    score = 0
    currentScore.innerHTML = 0
    gameOver = false;
    startScreen.style.display = 'flex'
    gameOverScr.style.display = 'none'
    charmander.style.display = 'none'
    bulbasaur.style.display = 'none'
    squirtle.style.display = 'none'
    confirm.style.display = 'none'
    first.style.display = 'inline'
    second.style.display = 'inline'
    third.style.display = 'inline'
    intervalId = 0

}

let music = document.querySelector('#music span')

window.addEventListener('load', () => {
    music.addEventListener('click', () => {
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
    audio.play()
    draw()
    commands()
    confirm.style.display = 'none'
    canvas.style.display = 'none'
    gameOverScr.style.display = 'none'
    charmander.style.display = 'none'
    bulbasaur.style.display = 'none'
    squirtle.style.display = 'none'

    startBtn.addEventListener('click', () => {
        start()
    })


    restartBtn.addEventListener('click', () => {
        restart()
    })
})
