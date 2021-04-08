// load backgrounds
let gym1 = new Image()
gym1.src = "../images/mountain-range-stretching.webp"
let gym2 = new Image()
gym2.src = "../images/skybackground.png"
let water = new Image()
water.src = "/images/waterdrop.png"
let gym3 = new Image()
gym3.src = '../images/Vermillion-City.jpg'
let thunderbolt = new Image()
thunderbolt.src = "/images/thunderbolt.png"
let electric = new Image()
electric.src = "/images/electric.png"
let gym4 = new Image()
gym4.src = '../images/Flowerfield.jpg'
let tree = new Image()
tree.src = "/images/tree.png"
let leaf = new Image()
leaf.src = "/images/leaf.png"
let gym5 = new Image()
gym5.src = "../images/Toxic0.jpg"
let sludge = new Image()
sludge.src = "/images/sludge.png"
let mudwall = new Image()
mudwall.src = "/images/mudwall.png"
let gym6 = new Image()
gym6.src = "../images/Psychic.jpg"
let gym7 = new Image()
gym7.src = '../images/Volcano.jpg'
let fire = new Image()
fire.src = '/images/fire.png'
let fireball = new Image()
fireball.src = '/images/fireball.png'
let gym8 = new Image()
gym8.src = "../images/Sand.jpg"
let plateau = new Image()
plateau.src = "../images/5211567-800px-indigo_plateau_po.png"
//  load badges

let boulder = document.querySelector("#boulder")
let cascade = document.getElementById("cascade")
let thunder = document.getElementById("thunder")
let rainbow = document.getElementById("rainbow")
let soul = document.getElementById("soul")
let marsh = document.getElementById("marsh")
let volcano = document.getElementById("volcano")
let earth = document.getElementById("earth")
function badges() {
    boulder.style.display = 'none'
    cascade.style.display = 'none'
    thunder.style.display = 'none'
    rainbow.style.display = 'none'
    soul.style.display = 'none'
    marsh.style.display = 'none'
    volcano.style.display = 'none'
    earth.style.display = 'none'
}
function gyms() {
    if (score >= 60) {
        bg = gym2
        boulder.style.display = 'inline'
        obstX -= 1
        fg1X -= 1
        fgX -= 1

        obstUp = cascade
        obstDown = water
    }
    if (score >= 120) {
        bg = gym3
        cascade.style.display = 'inline'
        obstX -= 1
        obstUp = thunderbolt
        obstDown = electric
        fg1X -= 1
        fgX -= 1
    }
    if (score > 180) {
        bg = gym4
        thunder.style.display = 'inline'
        obstX -= 1
        obstUp = leaf
        obstDown = tree
        fg1X -= 1
        fgX -= 1
    }
    if (score > 240) {
        bg = gym5
        rainbow.style.display = 'inline'
        obstX -= 1
        obstUp = sludge
        obstDown = mudwall
        audio.volume = 0.05
        fg1X -= 1
        fgX -= 1
    }
    if (score > 300) {
        bg = gym6
        soul.style.display = 'inline'
        obstX -= 0.5
        obstUp = marsh
        obstDown = rock
        fg1X -= 1
        fgX -= 1
    }
    if (score > 360) {
        bg = gym7
        marsh.style.display = 'inline'
        obstX -= 0.5
        obstUp = fireball
        obstDown = fire
        fg1X -= 1
        fgX -= 1
    }
    if (score > 420) {
        bg = gym8
        volcano.style.display = 'inline'
        obstX -= 0.5
        obstUp = rock
        obstDown = rock1
        fg1X -= 1
        fgX -= 1
    }
    if (score >= 480) {
        bg = plateau
        earth.style.display = 'inline'
        obstX -= 1
        obstUp = rock
        obstDown = rock1
        fg1X -= 1
        fgX -= 1
    }
    if (score >= 540) {
        winScr.style.display = 'flex'
        canvas.style.display = 'none'
        win = true
    }
}
