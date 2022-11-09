import { servicePokemons } from "./services.js";
import { drawPokemon } from "./drawPokemon.js";

for (let id = 1; id <= 100; id++) {
    let servpoks = await servicePokemons(id);
    drawPokemon(servpoks)    
}






