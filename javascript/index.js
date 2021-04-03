let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black';


// load images
let bg = new Image()
bg.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/skybackground.png?raw=true"

let fg = new Image()
fg.src = "https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/foreground.png?raw=true"


let pokemon = new Image()
pokemon.src = 'https://github.com/sil-sin/Gotta-Win-Em-All-provisory-/blob/main/images/1.svg?raw=true'
function draw(){
    ctx.drawImage(bg , 0, 0 )
    ctx.drawImage(fg, 0,300)
    ctx.drawImage(pokemon,30, 244,60,60 )
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
})