const div = document.getElementById("navbar");
div.style.backgroundColor ="black";
div.style.color ="white";
let nomFichier = cheminUrl.substring(cheminUrl.lastIndexOf('/')+1);
nomFichier = nomFichier.replace(".html","");
let button = document.createElement("button");
let title = document.createElement("h1");
let description = document.createElement("h3");
let part1 = document.createElement("div");
let part2 = document.createElement("div");
let part3 = document.createElement("div");
button.textContent = "Menu";
title.textContent = "Game.lol"
description.textContent = nomFichier;
div.appendChild(part1);
div.appendChild(part2);
div.appendChild(part3);
part1.appendChild(button);
part2.appendChild(title);
part3.appendChild(description);
div.style.width= "100%";
div.style.height = "80px";
div.style.display = "flex"
div.style.flexDirection = "row"
part1.style.alignSelf="center"
part3.style.alignSelf="center"
div.style.justifyContent = "space-around"
div.firstChild.style.width = "100px";

