// function scaleImg() { 
//     document.getElementById("img").height="500"; 
//     document.getElementById("img").width="500";
//     document.getElementById("container").height="600px";
//     document.getElementById("container").width="600px";
//     document.getElementById("container").style.backgroundColor="green";
// }
let window = document.getElementById("pagePopUp");

let img = document.getElementById("img");
let contentImg = document.getElementById("imgWindow");
let informationText = document.getElementById("information");
img.onclick = function(){
    window.style.display = "block";
    contentImg.src = this.src;
    informationText.innerHTML = this.alt;
}
let span = document.getElementsByClassName("closeBtn")[0];
span.onclick = function(){
    window.style.display="none";
}
// https://www.w3schools.com/howto/howto_css_modal_images.asp