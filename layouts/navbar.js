function dropdown() {
    // let chemin = cheminUrl.substring(cheminUrl.lastIndexOf(nomFichier));
    let myUrl = "http://localhost:63342" + cheminUrl.substring(nomFichier + "/" + cheminUrl.lastIndexOf(nomFichier));
    let homepageUrl = myUrl.replace(/\/[^\/]+\/[^\/]+$/, "/homepage/homepage.html");
    let galleryUrl = myUrl.replace(/\/[^\/]+\/[^\/]+$/, "/gallery/gallery.html");
    let gamesUrl = myUrl.replace(/\/[^\/]+\/[^\/]+$/, "/games/games.html");
    let myDropdown = document.createElement("div");

    myDropdown.setAttribute("class", "dropdown-content");
    part1.appendChild(myDropdown);
    let homepage = document.createElement("a")
    let gallery = document.createElement("a")
    let games = document.createElement("a")
    homepage.setAttribute("href", homepageUrl);
    gallery.setAttribute("href", galleryUrl);
    games.setAttribute("href", gamesUrl);
    homepage.textContent = "Homepage";
    gallery.textContent = "Gallery";
    games.textContent = "Games";
    switch (nomFichier) {
        case 'homepage' :
            return [
                myDropdown.appendChild(gallery),
                myDropdown.appendChild(games),
                ]

        case  'gallery' :
            return [
                myDropdown.appendChild(homepage),
                myDropdown.appendChild(games)]
        case 'games' :
            return [
                myDropdown.appendChild(homepage),
                myDropdown.appendChild(gallery)]
    }

}

const div = document.getElementById("navbar");
div.style.backgroundColor = "black";
div.style.color = "white";
let nomFichier = cheminUrl.substring(cheminUrl.lastIndexOf('/') + 1);
nomFichier = nomFichier.replace(".html", "");
let button = document.createElement("button");
let title = document.createElement("h1");
let description = document.createElement("h3");
let part1 = document.createElement("div");
let part2 = document.createElement("div");
let part3 = document.createElement("div");
part1.setAttribute("class", "dropdown")
button.textContent = "Menu";
title.textContent = "Game.lol"
description.textContent = nomFichier;
div.appendChild(part1);
div.appendChild(part2);
div.appendChild(part3);
part1.appendChild(button);
part2.appendChild(title);
part2.style.display ="flex"
part2.style.alignItems ="center"
part3.appendChild(description);
div.style.width = "100%";
div.style.height = "80px";
div.style.display = "flex"
div.style.flexDirection = "row"
part1.style.alignSelf = "center"
part3.style.alignSelf = "center"
div.style.justifyContent = "space-around"
div.firstChild.style.width = "100px";

// button.onclick = function (){
//     dropdown();
//     button.onclick=null;
// }
let dropdownOpened = false;
button.onclick = function () {
    if (dropdownOpened) {
        part1.removeChild(part1.querySelector('.dropdown-content'));
        part1.style.marginTop = "0px" ; // Fixe la hauteur de part1
        button.style.borderRadius = "10px";

        dropdownOpened = false;
    } else {
        dropdown();
        part1.style.marginTop = "82px" ; // Fixe la hauteur de part1
        dropdownOpened = true;
        button.style.borderRadius = "10px 10px 0 0";

    }
}
let css = `
        *{
        margin: 0px;
        }
        .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }
        .dropdown-content a {
            background-color: white;
        }
        .dropdown-content > a:hover {
            background-color: whitesmoke;
        }
        .dropdown>button {
        width : 100%;
        background-color: white;
        border : none;
        border-radius: 10px;
        }

    `;
let styile = document.createElement("style");
styile.textContent = css;
div.appendChild(styile);
