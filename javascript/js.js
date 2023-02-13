let leftButton = document.getElementsByClassName("arrowLeft");
function leftAction() {
    let myImg = document.getElementById("images");
    let child = myImg.children[0];
    myImg.removeChild(child);
    myImg.appendChild(child);
}
function rightAction() {
    let myImg = document.getElementById("images");
    let child = myImg.children[0];
    myImg.removeChild(child);
    myImg.appendChild(child);
}
function showImg(Src) {
    let bigImg = document.getElementById("zoom-in");
    bigImg.innerHTML = "<img src= ' " + Src + " '>";
    bigImg.style.display="block";
    document.getElementById("images".style.opacity="0.5");
}