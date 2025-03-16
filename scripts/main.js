document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".main__header__navbar__menu ul");

    if (hamburger && menu) {
        hamburger.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    }
    const darkModeToggle = document.getElementById("dark__mode--checkbox");
    const body = document.body;
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark__mode");
        darkModeToggle.checked = true;
    }
    darkModeToggle.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("dark__mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            body.classList.remove("dark__mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
