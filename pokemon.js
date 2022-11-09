


export function pokemon(api){
    const row = document.getElementById("tarjeta")
    
    
        
        let col = document.createElement("div")
        col.classList.add("col","mb-5")
        
        let card = document.createElement("div")        
        card.classList.add("card")
        card.classList.add("pikachu2")
        
        let img1 = document.createElement("img")
        img1.src = api.sprites.front_default
        img1.classList.add("pikachu")
        
        let pokeName = document.createElement("p")
        pokeName.innerHTML= api.name
        pokeName.classList.add("fw-bold")
        
        card.appendChild(img1)
        card.appendChild(pokeName)
        col.appendChild(card)
        row.appendChild(col)

        

            
   

    
} 