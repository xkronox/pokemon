const url = 'https://pokeapi.co/api/v2/pokemon/growlithe'
const carta = document.querySelector("#card")

const nombrePokemon = document.querySelector("header span");
const imagenPokemon = document.querySelector("img");
const tipoPokemon = document.getElementById("tipo")

pokemon = {
    nombre : undefined,
    imagen : undefined,
    tipo : undefined
}

function llamarPokemon(){

    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {       
        console.log(data) 
        pokemon.nombre = data.name;
        pokemon.imagen = data.sprites.other["official-artwork"].front_default;
        pokemon.tipo = data.types[0].type.name


        nombrePokemon.innerText = pokemon.nombre
        imagenPokemon.setAttribute("src", pokemon.imagen)
        carta.setAttribute("class", pokemon.tipo)
        
    })
    .catch(err => console.log(err))

    
}

llamarPokemon()
    