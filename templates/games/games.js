let gamesSection = document.getElementById("gamesGrid")
let gameZone = document.getElementById("gameZone")
for (let i = 0; i < jsonDatas.length; i++) {
    let game = document.createElement("div");
    gamesSection.appendChild(game);
    let name = jsonDatas[i].name;
    let nameShow = document.createElement("h3");
    nameShow.textContent = name;
    game.appendChild(nameShow);
    game.setAttribute('name', name);
    let showImage = document.createElement("img");
    let image = jsonDatas[i].urlImage;
    showImage.setAttribute('src', image);
    game.appendChild(showImage);
    let button = document.createElement("button")
    button.textContent = "PLAY";
    button.style.backgroundColor = "yellow";
    button.style.borderRadius = "20px";
    button.style.border = "2px black solid";
    button.style.fontStyle = "bold";
    game.appendChild(button);
    button.onclick = function (){
        gameZone.removeChild(gamesSection);
        import("./"+name+name+".js")
    }

}