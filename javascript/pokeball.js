

function pokeball() {
    first.addEventListener('mouseover', () => {
        first.style.borderColor = 'orangered';
    })
    first.addEventListener('mouseout', () => { first.style.borderColor = 'rgba(255, 68, 0, 0)'; })
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

    second.addEventListener('mouseover', () => {
        second.style.borderColor = 'green';
    })
    second.addEventListener('mouseout', () => {
        second.style.borderColor = 'rgba(255, 68, 0, 0)';
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

    third.addEventListener('mouseover', () => {
        third.style.borderColor = 'blue';
    })
    third.addEventListener('mouseout', () => {
        third.style.borderColor = "rgba(255, 68, 0, 0)";
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
        pokemon1 = pikachu1
        pokemon2 = pikachu2
        startBtn.style.display = 'inline'
        first.style.display = 'none'
        second.style.display = 'none'
        third.style.display = 'none'
    })
}
pokeball()