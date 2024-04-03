fetch("https://tyradex.tech/api/v1/pokemon")
    .then(response => response.json()) // transforme le résultat de l'API en JSON
    .then(response2 => {
        console.log(response2);
        for (let i = 0; i < 3; i++) {
            let randomPokemon = Math.floor(Math.random() * response2.length)
            let feed = document.getElementById("feed");
            let pokemon = document.createElement("div");
            feed.appendChild(pokemon);
            let showName = document.createElement("h3");
            let name = response2[randomPokemon].name.fr;
            showName.textContent = name;
            pokemon.setAttribute('name',name);
            pokemon.appendChild(showName);
            let showSprite = document.createElement("img");
            let sprite = response2[randomPokemon].sprites.regular;
            showSprite.setAttribute('src', sprite);
            pokemon.appendChild(showSprite);
        }
    })