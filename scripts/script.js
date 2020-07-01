/* Toggle Navigation Menu */

function toggleMenu() {
    document.getElementById("nav").classList.add("active");
}
function toggleMenuOff() {
    document.getElementById("nav").classList.remove("active");
}

/* Toggle Images */

let prevID = "image1";
document.getElementById(prevID).style.background = "rgba(0,0,0,0.2)";
function imageToggle(ID) {
    document.getElementById(prevID).style.background = "";
    document.getElementById(ID).style.background = "rgba(0,0,0,0.2)";
    let url = "images/" + ID + ".png"
    document.getElementById("main-image").src = url;
    prevID = ID;
}