let feed = document.getElementById("feed");
let form = document.getElementById("form");
fetch("https://tyradex.tech/api/v1/pokemon")
    .then(response => response.json()) // transforme le résultat de l'API en JSON
    .then(response2 => {
        console.log(response2);
        let inputName = document.createElement("input")
        let inputSprite = document.createElement("input")
        let submit = document.createElement("button")
        submit.textContent = "Submit"
        inputName.setAttribute("type", "text")
        inputName.setAttribute("placeholder", "give a pokemon name")
        inputSprite.setAttribute("type", "url")
        inputSprite.setAttribute("placeholder", "give a url of sprite")
        form.appendChild(inputName);
        form.appendChild(inputSprite);
        form.appendChild(submit);
        submit.onclick = function () {
            console.log(inputName.value && inputSprite.value);
            if (inputName.value !== "" && inputSprite.value !== "") {
                let pokemon = document.createElement("div");
                form.appendChild(pokemon);

                let destroyButton =document.createElement("button");
                destroyButton.textContent="x"
                pokemon.appendChild(destroyButton)

                destroyButton.onclick = function (){
                    form.removeChild(destroyButton.parentNode)
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
            } else {
                let error = document.createElement("span")
                error.textContent = "fill all input";
                form.appendChild(error)
            }
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