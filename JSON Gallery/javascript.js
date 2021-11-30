let imageContainer = document.querySelector(".imageBox");

let imageList;
//imageList is an array

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
            imageContainer.appendChild(imageElement);
        });
        //the data from fetch is now stored in imagelist. so don't have to fetch but just call imagelist array
        imageList = data;
        // console.log(imageList[0]);
    })

