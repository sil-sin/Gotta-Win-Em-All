let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black';
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
let audio = new Audio('../images/Jason Paige - Pokémon Theme Song (minus).mp3')
let music = document.querySelector('#music span')
let musicBox = document.getElementById('music')
let winMusic = new Audio("../images/05. Pokémon Gym - Evolution (Pokémon Red - Pokemon Blue).mp3")
let gameoverMusic = new Audio('/images/Ugly Flute and Kazoo Home Alone Theme - TikTok Audio (320 kbps).mp3')
// .............................................

// animation
function animate() {
    let pause = false
    let play =false
    // document.addEventListener('keydown', (event) => {

    //     if (event.code == 'ArrowDown') {
    //         isArrowDown = true
    //         isArrowUp = false
    //     }
    //     else if (event.code == 'ArrowUp') {
    //         isArrowDown = false
    //         isArrowUp = true
    //     }
    
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
            obstacle = obstUp
        } else {
            obstacle = obstDown
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
        cancelAnimationFrame(intervalId)
        intervalId = 0

    } else {
        intervalId = requestAnimationFrame(animate)
    };
    if (win == true) {
        music.innerHTML = "Off"
        music.style.color = 'red'
        audio.pause()
        winMusic.load()
        winMusic.volume = 0.05
        winMusic.play()

        cancelAnimationFrame(intervalId)
    }
}
// start button
function start() {

    startScreen.style.display = 'none'
    gameOverScr.style.display = 'none'
    canvas.style.display = 'block'
    obstUp = rock
    obstDown = rock1
    let counter = 0
    let id = setInterval(() => {
        player = pokemon
    }, 210)
    let id1 = setInterval(() => {
        player = pokemon1
    }, 305)
    let id2 = setInterval(() => {
        player = pokemon2
    }, 402)
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
    egg.style.display = 'inline'
    bg = gym1
    gameoverMusic.pause()
    winMusic.pause()
    audio.load()
    badges()

}

window.addEventListener('load', () => {
    badges()
    draw()
    commands()
    audio.pause()
    winMusic.pause()
    confirm.style.display = 'none'
    canvas.style.display = 'none'
    gameOverScr.style.display = 'none'
    winScr.style.display = 'none'
    Charmander.style.display = 'none'
    Bulbasaur.style.display = 'none'
    Squirtle.style.display = 'none'
    startBtn.style.display = 'none'

    musicBox.addEventListener('click', () => {
        if (music.innerHTML == 'On') {
            music.innerHTML = "Off"
            music.style.color = 'red'
            audio.pause()
        } else if (music.innerHTML == "Off") {
            music.innerHTML = "On"
            music.style.color = 'green'
            audio.volume = 0.05
            audio.play()
            audio.loop = true

        }
    })
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
