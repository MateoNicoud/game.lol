let feed = document.getElementById("feed");
let form = document.getElementById("form");
let addedPokemon =document.getElementById("addedPokemon")
fetch("https://tyradex.tech/api/v1/pokemon")
    .then(response => response.json()) // transforme le résultat de l'API en JSON
    .then(response2 => {
        console.log(response2);
        let inputName = document.getElementById("inputName")
        let inputSprite = document.getElementById("inputSprite")
        form.onsubmit = function () {
            let pokemon = document.createElement("div");
            addedPokemon.appendChild(pokemon);

            let destroyButton = document.createElement("button");
            destroyButton.textContent = "x"
            pokemon.appendChild(destroyButton)

            destroyButton.onclick = function () {
                addedPokemon.removeChild(destroyButton.parentNode)
            }

            let showName = document.createElement("h3");
            let name = inputName.value;
            showName.textContent = name;
            pokemon.setAttribute('name', name);
            pokemon.appendChild(showName);
            let showSprite = document.createElement("img");
            let sprite = inputSprite.value;
            showSprite.setAttribute('src', sprite);
            pokemon.appendChild(showSprite);
            return false;

        }
        for (let i = 0; i < 3; i++) {
            let randomPokemon = Math.floor(Math.random() * response2.length)
            let pokemon = document.createElement("div");
            feed.appendChild(pokemon);
            let showName = document.createElement("h3");
            let name = response2[randomPokemon].name.fr;
            showName.textContent = name;
            pokemon.setAttribute('name', name);
            pokemon.appendChild(showName);
            let showSprite = document.createElement("img");
            let sprite = response2[randomPokemon].sprites.regular;
            showSprite.setAttribute('src', sprite);
            pokemon.appendChild(showSprite);
        }
    })