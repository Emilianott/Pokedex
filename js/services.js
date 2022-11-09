export async function servicePokemons(id) {  
     let    response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);        
    return response.json()   
}

