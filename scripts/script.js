/* Toggle Navigation Menu */

function toggleMenu() {
    document.getElementById("nav").classList.add("active");
}
function toggleMenuOff() {
    document.getElementById("nav").classList.remove("active");
}

/* Toggle Images */

let prevID = "image1";
document.getElementById(prevID).style.opacity = 0.7;
function imageToggle(ID) {
    document.getElementById(prevID).style.opacity = 1;
    document.getElementById(ID).style.opacity = 0.7;
    let url = "images/" + ID + ".png"
    document.getElementById("main-image").src = url;
    prevID = ID;
}