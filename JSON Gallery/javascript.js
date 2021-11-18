let popUpWindow = document.getElementById("pagePopUp");

let coverImage = document.getElementById("imageBlock");
let contentImg = document.getElementById("imgWindow");
let informationText = document.getElementById("information");

coverImage.addEventListener("click", function display(){
    popUpWindow.style.display = "block";
    contentImg.src = this.src;
    informationText.innerHTML = this.alt;
})
let span = document.getElementsByClassName("closeBtn")[0];

span.onclick = function closeBtn(){
    popUpWindow.style.display="none";
}