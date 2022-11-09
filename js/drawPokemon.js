export function drawPokemon(servpoks) {

    // Tarjetas
    const cards = document.createElement("div");
    cards.classList.add("card", "bg-light", "border-light", "rounded-5", "cards");

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
    cardImage.classList.add("rounded-5", "mx-auto", "d-block", "h-100", "cardImage", "mb-5");
    cards.appendChild(cardImage);

    // Nombre
    const cardName = document.createElement("h2");
    cardName.innerHTML = servpoks.name;
    cardName.classList.add("fw-bold", "text-center", "mb-5", "cardName");
    cards.appendChild(cardName);

    // Habilidades
    for (let i = 0; i < servpoks.abilities.length; i++) {
        const cardAbilities = document.createElement("p");
        cardAbilities.innerHTML = `Ability ${i + 1}: <span class="fw-bold"> ${servpoks.abilities[i].ability.name} </span>`
        cardAbilities.classList.add("text-center", "cardAbilities")
        cards.appendChild(cardAbilities)
    }










} 