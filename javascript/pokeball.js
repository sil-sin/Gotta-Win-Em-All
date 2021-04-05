

function pokeball() {

    first.addEventListener('click', () => {
        charmander.style.display = 'inline'
        first.style.display = 'none'
        starter = "Charmander"
        console.log(starter)
        second.style.display = 'none'
        third.style.display = 'none'
        pokename.innerHTML = "Charmander"
        confirm.style.display = 'inline'
        charmander.addEventListener('click', () => {
            first.style.display = 'inline'
            second.style.display = 'inline'
            third.style.display = 'inline'
            charmander.style.display = 'none'
            confirm.style.display = 'none'
        })
    })


    second.addEventListener('click', () => {
        bulbasaur.style.display = 'inline'
        second.style.display = 'none'
        starter = "Bulbasaur"
        first.style.display = 'none'
        third.style.display = 'none'
        pokename.innerHTML = "Bulbasaur"
        confirm.style.display = 'inline'
        bulbasaur.addEventListener('click', () => {
            first.style.display = 'inline'
            second.style.display = 'inline'
            third.style.display = 'inline'
            bulbasaur.style.display = 'none'
            confirm.style.display = 'none'
        })
    })


    third.addEventListener('click', () => {
        squirtle.style.display = 'inline'
        third.style.display = 'none'
        starter = "Squirtle"
        first.style.display = 'none'
        second.style.display = 'none'
        pokename.innerHTML = "Squirtle"
        confirm.style.display = 'inline'
        squirtle.addEventListener('click', () => {
            first.style.display = 'inline'
            second.style.display = 'inline'
            third.style.display = 'inline'
            squirtle.style.display = 'none'
            confirm.style.display = 'none'
        })
    })

}
pokeball()