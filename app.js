import { comsumeAPI } from "./services.js";  
import {pokemon} from "./pokemon.js";

const api = await comsumeAPI();
pokemon(api)

console.log(api.name)




