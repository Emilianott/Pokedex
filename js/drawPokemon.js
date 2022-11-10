



export function drawPokemon(servpoks ) {
    

    // Tarjetas
    const cards = document.createElement("div");
    cards.classList.add("card", "border-light", "rounded-5", "cards","h-100");

    // Coloumnas
    const cols = document.createElement("div");
    cols.classList.add("col-md-3", "col-sm-4", "col-xs-6", "mb-5", "g-5");
    cols.appendChild(cards);

    // Fila
    const row = document.getElementById("row");
    row.appendChild(cols);

    // Imagen
    const cardImage = document.createElement("img");
    cardImage.src = servpoks.sprites.front_default;
    cardImage.classList.add("mx-auto", "d-block", "h-90", "cardImage", "mb-5");    
    cards.appendChild(cardImage);

    // Nombre
    const cardName = document.createElement("h2");
    cardName.innerHTML = servpoks.name;
    cardName.classList.add("fw-bold", "text-center", "mb-5", "cardName");
    cards.appendChild(cardName);

    //Pokemon Type & Img Color
    for (let i = 0; i < servpoks.types.length; i++) {
        const cardAbilities = document.createElement("p");
        cardAbilities.innerHTML = `Types : <span class="fw-bold"> ${servpoks.types[i].type.name} </span>`
        cardAbilities.classList.add("text-center", "cardAbilities")
        if(servpoks.types[0].type.name ==="grass"){
            cardImage.style.backgroundColor ="#B8FF33"    
        }
        else if(servpoks.types[0].type.name ==="fire"){
            cardImage.style.backgroundColor ="#FB6746"
        }
        else if(servpoks.types[0].type.name ==="water"){
            cardImage.style.backgroundColor ="#69A1FC"
        }
        else if(servpoks.types[0].type.name ==="bug"){
            cardImage.style.backgroundColor ="#5A4A55"
        }
        else if(servpoks.types[0].type.name ==="poison"){
            cardImage.style.backgroundColor ="purple"
        }
        else if(servpoks.types[0].type.name ==="normal"){
            cardImage.style.backgroundColor ="white"
        }
        else if(servpoks.types[0].type.name ==="ghost"){
            cardImage.style.backgroundColor ="#061011"
        }
        else if(servpoks.types[0].type.name ==="electric"){
            cardImage.style.backgroundColor ="#E0FF00"
        }
        else if(servpoks.types[0].type.name ==="psychic"){
            cardImage.style.backgroundColor ="#5C5887"
        }
        else if(servpoks.types[0].type.name ==="rock"){
            cardImage.style.backgroundColor ="darkgrey"
        }
             
        
        
        cards.appendChild(cardAbilities)
    }
    
    
    // Habilidades
    for (let i = 1; i < servpoks.abilities.length; i++) {
        
        const cardAbilities = document.createElement("p");
        cardAbilities.innerHTML = `Ability ${i + 1}: <span class="fw-bold"> ${servpoks.abilities[i].ability.name} </span>`
        cardAbilities.classList.add("text-center", "cardAbilities")
        cards.appendChild(cardAbilities)
    }
    
    const pokemonId = document.createElement("p")
    pokemonId.classList.add("pokeId")
    pokemonId.innerHTML = servpoks.id
    cards.appendChild(pokemonId)



} 
