



export async function comsumeAPI(){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    return response.json()   
}

