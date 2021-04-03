let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black';
let intervalId = 0
let fgX = 0, fg1X = 700;
let obstX = 400, obstY = 200;
// load images
let bg = new Image()
bg.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/skybackground.png?raw=true"

let fg = new Image()
fg.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/foreground.png?raw=true"

let fg1 = new Image()
fg1.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/foreground.png?raw=true"


let pokemon = new Image()
pokemon.src = 'https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/1.svg?raw=true'

let obstacle = new Image()
obstacle.src = 'https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/energyball.png?raw=true'

obstacle.style.background = 'none'

// drawing
function draw() {
    ctx.drawImage(bg, 0, 0, 700, 400)
    ctx.drawImage(fg, fgX, 350)
    ctx.drawImage(fg1, fg1X, 350)
    ctx.drawImage(pokemon, 50, 230, 100, 150)
    

    ctx.drawImage(obstacle, obstX, obstY, 50, 50)
}

function animate() {
    draw()
    fg1X -= 2
    fgX -= 2
    obstX -= 2
    if (obstX + 50 < 0) {
        obstX = canvas.width
    }
    if (fgX + fg.width < 0) {
        fgX = canvas.width
    }
    if (fg1X + fg1.width < 0) {
        fg1X = canvas.width
    }
    intervalId = requestAnimationFrame(animate)
}



window.addEventListener('load', () => {
    draw()
    // canvas.style.display = 'none'
    // restartBtn.style.display = 'none'
    // start()
    // startBtn.addEventListener('click', () => {
    //      start()
    // })

    // restartBtn.addEventListener('click', () => {
    //     restart()
    // })
    animate()
})