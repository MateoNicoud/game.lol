let cheminUrl = window.location.pathname;
if (cheminUrl.includes("/homepage/homepage.html")){
    import("./../templates/homepage/homepage.js");
} else if (cheminUrl.includes("gallery/gallery.html")){
    import("./../templates/gallery/gallery.js");
} else if (cheminUrl.includes("games/games.html")){
    import("./../templates/games/data.js");
    import("./../templates/games/games.js");
}
 import("./../layouts/navbar.js");