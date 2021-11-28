// let popUpWindow = document.getElementById("pagePopUp");

// let coverImage = document.getElementById("imageBlock");
// let contentImg = document.getElementById("imgWindow");
// let informationText = document.getElementById("information");

// coverImage.addEventListener("click", function display(){
//     popUpWindow.style.display = "block";
//     contentImg.src = this.src;
//     informationText.innerHTML = this.alt;
// })
// let span = document.getElementsByClassName("closeBtn")[0];

// span.onclick = function closeBtn(){
//     popUpWindow.style.display="none";
// }

fetch("./products.json")
    .then(function (respons) {
        console.log(respons); //ska få status 200
        if (respons.ok) {
            return respons.json(); //parsea json objektet.
        }
    })
    .then((data) => {
        createProducts(data);
        fillArray(data);
    })
    .catch((error) => console.log(error));