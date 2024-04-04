
        let imagesSection = document.getElementById("displayImages");
        fetch("https://tyradex.tech/api/v1/pokemon")
            .then(response => response.json()) // transforme le résultat de l'API en JSON
            .then(response2 => {
                for (let i = 0; i < 9; i++) {
                    let randomPokemon = Math.floor(Math.random() * response2.length)
                    let pokemon = document.createElement("div");
                    imagesSection.appendChild(pokemon);
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
            });

        let sectionColumn = document.getElementById("displayOptions");
            let columnButton = document.createElement("button");
        let columnIcon = document.createElement("object");

        columnIcon.setAttribute("data","./../../images/column_icon.svg");
        columnIcon.setAttribute("type", "image/svg+xml");
            sectionColumn.appendChild(columnButton);
            columnButton.appendChild(columnIcon);
            

        let sectionMosaique = document.getElementById("displayOptions");
        let mosaiqueButton = document.createElement("button");
        let mosaiqueIcon = document.createElement("object");
        let embedMosaique = document.createElement("embed")

        embedMosaique.setAttribute("src","./../../images/mosaique_icon.svg");
        sectionMosaique.appendChild(mosaiqueButton);
        mosaiqueButton.appendChild(mosaiqueIcon);
        mosaiqueIcon.appendChild(embedMosaique);

        columnButton.onclick = function () {
            imagesSection.classList.remove('grid')
            imagesSection.setAttribute("class","column" );
        }
        mosaiqueButton.onclick = function () {
            imagesSection.classList.remove('column')
            imagesSection.setAttribute("class","grid" );
        }

