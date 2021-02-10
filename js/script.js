// Convert to React later, this is for basic functionality and testing UX and UI
var navID = "";
function toggleMenu() {
    navID = document.getElementById("midLinks");
    if (navID.className === "navBar__linksMid") {
        navID.className += " responsive";
    } else {
        navID.className = "navBar__linksMid";
    }
    console.log(navID);
}

function about() {
    itemID = document.getElementById("shape");
    itemID.classList.toggle("slideIn");
    //itemID.className += " slideIn";
}


// Below code closes the menu if it was previously open and the user then resizes the page over 768px wide

// navID won't be initialized with a value until the toggleMenu function has been run once - not sure if this will
// Cause issues? Also is it inneficient to check constantly whether the page is being resized?
window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && navID.className !== "navBar__linksMid") {
        navID.className -= " responsive";
        navID.className = "navBar__linksMid";
    }
    // resize.classList.remove(" responsive");
});

// Add so that the menu closes if "clicking out" (clicking body element) of it?