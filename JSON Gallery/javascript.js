let imageContainer = document.querySelector(".imageBox");
let popUpBox = document.querySelector(".popUp");
let closeBtn = document.querySelector(".closeBtn");
let test;

let imageList;
//imageList is an array

function toggle(ELEMENT, DISPLAY) {
    if (ELEMENT.style.display === "none") {
        ELEMENT.style.display = DISPLAY;
    } else {
        ELEMENT.style.display = "none";
    }
}


fetch("paintings.json")
    .then(function (response) {
        return response.json();
    })
    .then(data => {
        data.forEach(image => {
            let titleElement = document.createElement("h1");
            titleElement.innerHTML = image.title;
            imageContainer.appendChild(titleElement);

            let imageElement = document.createElement("img");
            imageElement.setAttribute("class", "paintings");
            imageElement.setAttribute("src", image.url);
            imageElement.setAttribute("id", image.id);
            imageContainer.appendChild(imageElement);
        });
        //the data from fetch is now stored in imagelist. so don't have to fetch but just call imagelist array
        imageList = data;
        // console.log(imageList[0]);
        for (let i = 0; i < imageList.length; i++) {
            document.getElementById(imageList[i].id).addEventListener("click", function () {
                popupContainer(i);
            });
        }
    })

function popupContainer(ITERATION) {
    let popUp = `
    
        <div class="imageContainer">
            <img src="${imageList[ITERATION].url}">
        </div>
        <div class="infoContainer">
            <h1>${imageList[ITERATION].title}</h1>
            <p>${imageList[ITERATION].artistName}</p>
            <p>${imageList[ITERATION].year}</p>
            <p>${imageList[ITERATION].canvasSize}</p>
            <p>${imageList[ITERATION].description}</p>
            <p>${imageList[ITERATION].alt}</p>
        </div>
    `
    popUpBox.innerHTML = popUp;
    toggle(popUpBox, "flex");
    toggle(closeBtn, "block");
}
closeBtn.addEventListener("click", function () {
    toggle(popUpBox, "flex");
    toggle(this, "block");
});