// load backgrounds
let gym1=new Image()
gym1.src="../images/mountain-range-stretching.webp"
let gym2 = new Image()
gym2.src = "../images/skybackground.png"
let gym3 =new Image()
gym3.src='../images/Vermillion-City.jpg'
let gym4 =new Image()
gym4.src='../images/Flowerfield.jpg'
let gym5=new Image()
gym5.src = "../images/Toxic0.jpg"
let gym6 = new Image()
gym6.src="../images/Psychic.jpg"
let gym7= new Image()
gym7.src = '../images/Volcano.jpg'
let gym8 = new Image()
gym8.src ="../images/Sand.jpg"
let plateau = new Image()
plateau.src = "../images/5211567-800px-indigo_plateau_po.png"
function gyms(){
    if(score > 20 ){
        bg=gym2
    }
    if(score > 60){
        bg=gym3
    }
    if(score > 80){
        bg=gym4
    }
    if(score > 100){
        bg=gym5
    }
    if(score > 120){
        bg=gym6
    }
    if(score > 160){
        bg=gym7
    }
    if(score > 200){
        bg=gym8
    }
    if(score >= 300){
        bg=plateau
    }
}
