let imagesSection = document.getElementById("displayImages");

//-------------------------------------------------------------------------

fetch("https://tyradex.tech/api/v1/pokemon")
    .then(response => response.json()) // transforme le résultat de l'API en JSON
    .then(response2 => {
        for (let i = 0; i < 9; i++) {
            let randomPokemon = Math.floor(Math.random() * response2.length)
            let pokemon = document.createElement("div");
            imagesSection.appendChild(pokemon);
            let name = response2[randomPokemon].name.fr;
            pokemon.setAttribute('name', name);
            let showSprite = document.createElement("img");
            let sprite = response2[randomPokemon].sprites.regular;
            showSprite.setAttribute('src', sprite);
            pokemon.appendChild(showSprite);

        }
    });

//-------------------------------------------------------------------------

let sectionColumn = document.getElementById("displayOptions");
let columnButton = document.createElement("button");
let columnIcon = document.createElement("object");

columnIcon.setAttribute("data", "./../../images/column_icon.svg");
columnIcon.setAttribute("type", "image/svg+xml");
sectionColumn.appendChild(columnButton);
columnButton.appendChild(columnIcon);


//-------------------------------------------------------------------------

let sectionMosaique = document.getElementById("displayOptions");
let mosaiqueButton = document.createElement("button");
let mosaiqueIcon = document.createElement("object");
let embedMosaique = document.createElement("embed")

embedMosaique.setAttribute("src", "./../../images/mosaique_icon.svg");
sectionMosaique.appendChild(mosaiqueButton);
mosaiqueButton.appendChild(mosaiqueIcon);
mosaiqueIcon.appendChild(embedMosaique);

//-------------------------------------------------------------------------

columnButton.onclick = function () {
    imagesSection.classList.remove('grid')
    imagesSection.setAttribute("class", "column");
}

//-------------------------------------------------------------------------

mosaiqueButton.onclick = function () {
    imagesSection.classList.remove('column')
    imagesSection.setAttribute("class", "grid");
}

//-------------------------------------------------------------------------

let form = document.getElementById("form");
form.onsubmit = function () {

    let addImage = document.getElementById("addImage").value;
    let pokemon = document.createElement("div");
    let destroyButton = document.createElement("button");
    imagesSection.appendChild(pokemon);
    destroyButton.textContent = "x"
    pokemon.appendChild(destroyButton)
    let showSprite = document.createElement("img");
    let sprite = addImage;
    showSprite.setAttribute('src', sprite);
    pokemon.appendChild(showSprite);
    destroyButton.onclick = function () {
        imagesSection.removeChild(destroyButton.parentNode)
    }

    return false;
}

//--------------------------------------------------------------------
let addInput = document.getElementById("addInput")
let showButton = document.getElementById("showButton");
let showInput = document.getElementById("showInput");
showButton.onclick = function () {
    addInput.classList.remove("displayOff");
    showInput.setAttribute("class", "displayOff");

}
//------------------------------------------------------------------------

let slides = document.getElementsByClassName('carrousel-item');

function addActive(slide) {
    slide.classList.add('active')
}

function removeActive(slide) {
    slide.classList.remove('active');
}

addActive(slides[0]);
setInterval(function () {
        for (let i = 0; i < slides.length; i++) {
            if (i + 1 === slides.length) {
                setTimeout(removeActive, 100, slides[i]);
                addActive(slides[0]);
                break;
            }
            if (slides[i].classList.contains('active')) {
                setTimeout(removeActive, 1000, slides[i]);
                addActive(slides[i + 1]);
                break;
            }
        }
    }
    , 5000)


let slideImages = document.querySelectorAll('.slide-image');

let lastSlideImage = slideImages[slideImages.length - 1];

let backgroundImageStyle = lastSlideImage.style.backgroundImage;
let carrousel = document.querySelector(".carrousel");
console.log(backgroundImageStyle)
carrousel.style.backgroundImage = backgroundImageStyle;

