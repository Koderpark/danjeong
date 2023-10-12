// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
//import "../css/index.css";

// Import JS
import menuOpen from "./menuOpen";
import infiniteScroll from "./infiniteScroll";

// Call the menu and infinite scroll functions
menuOpen();
infiniteScroll();

function modifyColor() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

function setColor(choice) {
    // choice = light/dark
    localStorage.theme = choice;
    modifyColor();
}

(function () {
    // Whenever the user explicitly chooses light mode
    //localStorage.theme = "light";
    // Whenever the user explicitly chooses dark mode
    //localStorage.theme = "dark";
    // Whenever the user explicitly chooses to respect the OS preference
    //localStorage.removeItem("theme");

    modifyColor();
})();
