// load images
// background
let bg = gym1;
// foreground
let fg = new Image()
fg.src = "../images/foreground.png"
let foreground = fg, foreground1 = fg
// game elements
let intervalId = 0
let fgX = 0, fg1X = 700, fgWidth = 700
let obstX = 1000, obstY = 200;
let pokeX = 50, pokeY = 230, pokeHeight = 150, pokeWidth = 100;
let isArrowUp = false, isArrowDown = false;
let currentScore = document.querySelector('#current span')
let score = 0
let gameOver = false, win = false
// character
// pikachu
let pikachu = new Image()
pikachu.src = '../images/pika0.gif'
let pikachu1 = new Image()
pikachu1.src = "../images/pika1.gif"
let pikachu2 = new Image()
pikachu2.src = "../images/pika2.gif"
// charmander 
let charmander = new Image()
charmander.src = "../images/char0.gif"
let charmander1 = new Image()
charmander1.src = "../images/char1.gif"
let charmander2 = new Image()
charmander2.src = "../images/char2.gif"
// bulbasaur
let bulbasaur = new Image()
bulbasaur.src = "../images/bulba0.gif"
let bulbasaur2 = new Image()
bulbasaur2.src = "../images/bulba1.png"
let bulbasaur1 = new Image()
bulbasaur1.src = "../images/bulba2.png"
// squirtle
let squirtle = new Image()
squirtle.src = "../images/squi0.png"
let squirtle1 = new Image()
squirtle1.src = "../images/squi1.png"
let squirtle2 = new Image()
squirtle2.src = "../images/squi2.png"
// obstacles
// rocks
let rock = new Image()
rock.src = '../images/rock.png'
let rock1 = new Image()
rock1.src = "../images/rock1.png"
let obstUp = rock
let obstDown = rock1
let obstacle = obstUp
let pokemon = first, pokemon1 = pikachu1, pokemon2 = pikachu2
let player = pokemon

// drawings
function draw() {
    commands()
    if (starter == "Charmander") {
        pokemon = charmander
        pokemon1 = charmander1
        pokemon2 = charmander2
    }
    else if (starter == "Bulbasaur") {
        pokemon = bulbasaur
        pokemon1 = bulbasaur1
        pokemon2 = bulbasaur2
    }
    else if (starter == "Squirtle") {
        pokemon = squirtle
        pokemon1 = squirtle1
        pokemon2 = squirtle2
    }

    ctx.drawImage(bg, 0, 0, 700, 400)
    ctx.drawImage(foreground, fgX, 330)
    ctx.drawImage(foreground1, fg1X, 330)
    ctx.drawImage(player, pokeX, pokeY, pokeWidth, pokeHeight)
    ctx.drawImage(obstacle, obstX, obstY, 70, 70)
    gyms()
}


//commands 
function commands() {
    document.addEventListener('keydown', (event) => {
        if (event.code == 'ArrowDown') {
            isArrowDown = true
            isArrowUp = false
        }
        else if (event.code == 'ArrowUp') {
            isArrowDown = false
            isArrowUp = true
        }
    })

    document.addEventListener('keyup', () => {
        isArrowDown = false
        isArrowUp = false

    })
    if (pokeY <= 229) {
        isArrowUp = false
    }

    if (isArrowUp && pokeY > 220) {

        pokeY -= 150
    } else if (isArrowUp == false) {
        pokeY += 3
        if (pokeY > 230) {
            pokeY = 230
        }
    }
    if (isArrowDown) {
        player = pokemon
        pokeHeight = 70
        pokeY += pokeHeight

    } else {

        pokeHeight = 150
    }
}
// collision
function collision() {
    if ((obstX < pokeX + pokeWidth && obstX > pokeX) && ((pokeY > obstY && pokeY < obstY + 70) || (pokeY + (pokeHeight / 2) > obstY && pokeY + (pokeHeight / 2) < obstY + 70)
        || (pokeY + pokeHeight > obstY && pokeY + pokeHeight < obstY + 70))) {
        gameOver = true
        badges()
        audio.pause()
        gameoverMusic.load()
        gameoverMusic.volume = 0.05
        gameoverMusic.play()
    }

}

