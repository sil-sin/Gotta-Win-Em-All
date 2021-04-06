// load images
// background
let bg = gym1;
// foreground
let fg = new Image()
fg.src = "../images/foreground.png"
let foreground = fg, foreground1 = fg

// character
// pikachu
let pikachu = new Image()
pikachu.src = 'https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/pika0.gif?raw=true'
let pikachu1 = new Image()
pikachu1.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/pika1.gif?raw=true"
let pikachu2 = new Image()
pikachu2.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/pika2.gif?raw=true"
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
// obstacles
// rocks
let rock = new Image()
rock.src = 'https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/rock.png?raw=true'
let rock1 = new Image()
rock1.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/rock1.png?raw=true"
// waterdrops
// 
let obstacle = rock
let pokemon = first, pokemon1 = pikachu1, pokemon2 = pikachu2
let player = pokemon

// drawings
function draw() {
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
        pokemon1 = squirtle
        pokemon2 = squirtle
    }
    gyms()
    ctx.drawImage(bg, 0, 0, 700, 400)
    ctx.drawImage(foreground, fgX, 330)
    ctx.drawImage(foreground1, fg1X, 330)
    ctx.drawImage(player, pokeX, pokeY, pokeWidth, pokeHeight)
    ctx.drawImage(obstacle, obstX, obstY, 70, 70)

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

    if (isArrowUp && pokeY > 220) {

        pokeY -= 150
        if (pokeY < 220) {
            isArrowUp = false
            player = pokemon2
        }

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
    if ((obstX < pokeX + pokeWidth && obstX > pokeX) && ((pokeY > obstY && pokeY < obstY + 70)
        || (pokeY + pokeHeight > obstY && pokeY + pokeHeight < obstY + 70))) {
        gameOver = true
    }

}

