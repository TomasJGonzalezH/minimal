// SCRIPTS ESPECIFICOS PARA INDEX.HTML

document.addEventListener("DOMContentLoaded", () => {
    const infoButton = document.querySelector(".info-button");
    const infoButtonOffcanvas = document.querySelector(".info-button-offcanvas");
    const offcanvas = document.getElementById("offcanvas");

    if (infoButton) {
        infoButton.addEventListener("click", () => {
            offcanvas.style.top = "0";
        });
    }

    if (infoButtonOffcanvas) {
        infoButtonOffcanvas.addEventListener("click", () => {
            offcanvas.style.top = "-100%";
        });
    }
});