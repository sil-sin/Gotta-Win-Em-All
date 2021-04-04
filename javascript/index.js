let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black';

let intervalId = 0
// game elements
let fgX = 0, fg1X = 700;
let obstX = 600, obstY = 200;
let pokeX = 50, pokeY = 230, pokeHeight = 150, pokeWidth = 100;
// menu element
let startBtn = document.getElementById('startBtn')
let restartBtn = document.getElementById('restartBtn')
let gameOverScr = document.getElementById('gameOver')
let startScreen = document.getElementById('startScr')
let gameOver = false
let isArrowUp = false, isArrowDown = false;
let currentScore = document.querySelector('#current span')
let score = 0

// load images
// background
let bg = new Image()
bg.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/skybackground.png?raw=true"
// foreground
let fg = new Image()
fg.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/foreground.png?raw=true"

let fg1 = new Image()
fg1.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/foreground.png?raw=true"
// character
let pokemon = new Image()
pokemon.src = 'https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/1.svg?raw=true'
// obstacles
let rock = new Image()
rock.src = 'https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/rock.png?raw=true'

let rock1 = new Image()
rock1.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/rock1.png?raw=true"

let obstacle = rock
// .............................................
// drawings
function draw() {
    ctx.drawImage(bg, 0, 0, 700, 475)
    ctx.drawImage(fg, fgX, 350)
    ctx.drawImage(fg1, fg1X, 350)
    ctx.drawImage(pokemon, pokeX, pokeY, pokeWidth, pokeHeight)
    ctx.drawImage(obstacle, obstX, obstY, 70, 70)
}
// animation
function animate() {
    draw()
    commands()
    collision()
    //obstacle animation
    let num = 0
    obstX -= 10
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
    if (fgX + fg.width < 0) {
        fgX = canvas.width
    };
    if (fg1X + fg1.width < 0) {
        fg1X = canvas.width
    };
    // game over 
    if (gameOver == true) {
        canvas.style.display = 'none';
        gameOverScr.style.display = 'flex';
        intervalId = cancelAnimationFrame(intervalId)
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
    startScreen.style.display = 'none'
    gameOverScr.style.display = 'none'
    canvas.style.display = 'block'
    animate()

}
// restart button
function restart() {
    obstX = 800;
    score = 0
    currentScore.innerHTML = 0
    gameOver = false;
    startScreen.style.display = 'flex'
    gameOverScr.style.display = 'none'
}
// music
// choose pokemon 

window.addEventListener('load', () => {
    draw()
    commands()
    canvas.style.display = 'none'
    gameOverScr.style.display = 'none'

    startBtn.addEventListener('click', () => {
        start()
    })

    restartBtn.addEventListener('click', () => {
        restart()
    })
})
