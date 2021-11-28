let images;

fetch ("paintings.json")
.then(function (response){ 
    return response.json();
})
.then(data => {
    data.forEach(images => {
        let titleTag = "<h1>${image.title}</h1>";
        document.body.innerHTML += titleTag ;
    });
})