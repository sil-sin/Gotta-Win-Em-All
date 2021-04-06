// load images
// background
let bg = gym1;
// foreground
let fg = new Image()
fg.src = "../images/foreground.png"

// let rockFg = new Image()
// rockFg.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/alternativeFR.png?raw=true"

let foreground = fg, foreground1 = fg

// character
let pikachu = new Image()
pikachu.src = 'https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/pika0.gif?raw=true'
let pikachu1 = new Image()
pikachu1.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/pika1.gif?raw=true"
let pikachu2 = new Image()
pikachu2.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/pika2.gif?raw=true"
// obstacles
// rocks
let rock = new Image()
rock.src = 'https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/rock.png?raw=true'
let rock1 = new Image()
rock1.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/rock1.png?raw=true"
// waterdrops
let obstacle = rock
let pokemon = pikachu, pokemon1 = pikachu1, pokemon2 = pikachu2
let player = pokemon
// 
// drawings
function draw() {
    gyms()
    ctx.drawImage(bg, 0, 0, 700,400)
    ctx.drawImage(foreground, fgX, 330)
    ctx.drawImage(foreground1, fg1X, 330)
    ctx.drawImage(player, pokeX, pokeY, pokeWidth, pokeHeight)
    ctx.drawImage(obstacle, obstX, obstY, 70, 70)
    if (intervalId % 3 == 0) {
        player = pokemon
    } else if (intervalId % 4 == 0) {
        player = pokemon1
    } else if (intervalId % 5 == 0) {
        player = pokemon2
    }
}


//commands 
function commands() {
    document.addEventListener('keydown', (event) => {
        console.log(event)
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
        gameOver = false
    }

}

