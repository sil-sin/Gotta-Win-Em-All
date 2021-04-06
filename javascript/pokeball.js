

function pokeball() {

    first.addEventListener('click', () => {
        Charmander.style.display = 'inline'
        first.style.display = 'none'
        starter = "Charmander"
        second.style.display = 'none'
        third.style.display = 'none'
        pokename.innerHTML = "Charmander"
        confirm.style.display = 'inline'
        startBtn.style.display = 'inline'
        egg.style.display = 'none'
        Charmander.addEventListener('click', () => {
            first.style.display = 'inline'
            second.style.display = 'inline'
            third.style.display = 'inline'
            Charmander.style.display = 'none'
            confirm.style.display = 'none'
            startBtn.style.display = 'none'
            egg.style.display = 'inline'
        })
    })


    second.addEventListener('click', () => {
        Bulbasaur.style.display = 'inline'
        second.style.display = 'none'
        starter = "Bulbasaur"
        first.style.display = 'none'
        third.style.display = 'none'
        pokename.innerHTML = "Bulbasaur"
        confirm.style.display = 'inline'
        startBtn.style.display = 'inline'
        egg.style.display = 'none'
        Bulbasaur.addEventListener('click', () => {
            first.style.display = 'inline'
            second.style.display = 'inline'
            third.style.display = 'inline'
            Bulbasaur.style.display = 'none'
            confirm.style.display = 'none'
            startBtn.style.display = 'none'
            egg.style.display = 'inline'

        })
    })


    third.addEventListener('click', () => {
        Squirtle.style.display = 'inline'
        third.style.display = 'none'
        starter = "Squirtle"
        first.style.display = 'none'
        second.style.display = 'none'
        pokename.innerHTML = "Squirtle"
        confirm.style.display = 'inline'
        startBtn.style.display = 'inline'
        egg.style.display = 'none'
        Squirtle.addEventListener('click', () => {
            first.style.display = 'inline'
            second.style.display = 'inline'
            third.style.display = 'inline'
            Squirtle.style.display = 'none'
            confirm.style.display = 'none'
            startBtn.style.display = 'none'
            egg.style.display = 'inline'

        })
    })

    egg.addEventListener('click', () => {
        starter = "Pikachu"
        pokemon = pikachu
        startBtn.style.display = 'inline'
        first.style.display = 'none'
        second.style.display = 'none'
        third.style.display = 'none'
    })
}
pokeball()