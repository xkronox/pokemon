const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

function pokemon(){

    fetch(url)
    .then(response => response.json())    
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

pokemon()