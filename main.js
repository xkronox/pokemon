const url = 'https://pokeapi.co/api/v2/pokemon/growlithe'
const carta = document.querySelector("#card")

function pokemon(){

    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {        
        console.log(data)
        carta.innerHTML =
        `<img src=${data.sprites.other["official-artwork"].front_default}>`
    })
    .catch(err => console.log(err))

    
}

pokemon()
    