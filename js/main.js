const menuButton = document.getElementById("mobile-button");
const body = document.getElementById("body");
const menu = document.getElementById("menu");


menuButton.addEventListener("click", function() {
    menu.classList.toggle("show-menu");
    body.classList.toggle("stop-scrolling");
});

