import { servicePokemons } from "./services.js";
import { drawPokemon } from "./drawPokemon.js";


var x = 10

for (let id = x; id <= 10; id++) {
    let servpoks = await servicePokemons(id);
    drawPokemon(servpoks)   

}






