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
        }

    } else if (isArrowUp == false) {
        pokeY += 3
        if (pokeY > 230) {
            pokeY = 230
        }
     }
    if (isArrowDown) {
        pokeHeight = 70
        pokeY +=  pokeHeight

    } else {

        pokeHeight= 150
    }
}
// collision
function collision(){
    if((obstX <pokeX + pokeWidth && obstX > pokeX) && ((pokeY > obstY && pokeY < obstY + 70)
        ||(pokeY + pokeHeight > obstY && pokeY + pokeHeight < obstY +70) )){
        gameOver = true
    }

}