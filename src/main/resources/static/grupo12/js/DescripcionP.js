function toggleNavigation() {
    var navigationMenu = document.getElementById("navigationMenu");
    if (navigationMenu.style.display === "none" || navigationMenu.style.display === "") {
        navigationMenu.style.display = "block"; // Si está oculto o no tiene estilo, mostrarlo
    } else {
        navigationMenu.style.display = "none"; // Si está visible, ocultarlo
    }
}
var homeButton = document.getElementById("HOme");

homeButton.addEventListener("click", function() {
    window.location.href = "../templates/Home.html";
});