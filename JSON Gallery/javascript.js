// let imageContainer = document.querySelector(".imageBox");
let imageList ;
//imageList is an array

fetch ("paintings.json")
.then(function (response){ 
    return response.json();
})
.then(data => {
    data.forEach(image => {
        let titleTag = `<h1>${image.title}</h1>`;
        let imageTag = `<img src="${image.url}" class="paintings">`;
        document.body.innerHTML += titleTag ;
        document.body.innerHTML += imageTag;
    });
    //the data from fetch is now stored in imagelist. so don't have to fetch but just call imagelist array
    imageList = data;
    console.log(imageList[0]);
})
