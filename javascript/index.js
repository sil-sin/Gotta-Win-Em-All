let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d')
canvas.style.border = '2px solid black';

let bg = new Image()
bg.src = "../images/1.svg"

ctx.drawImage(bg , 0, 0 )



