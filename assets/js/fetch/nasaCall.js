// Fetches

// Nasa Images
var nasaKey = `wC0OktvMTSEtJByir363uFfuw3YhKmezYxfQ1BGq`;
var nasaImageSearchTerms = ['planet','star','galaxy'];
var x = Math.floor(Math.random() * nasaImageSearchTerms.length);
var nasaImagesSearch = `https://images-api.nasa.gov/search?q=${nasaImageSearchTerms[x]}`;

// NASA Images API
fetch(nasaImagesSearch)
.then(response => {
    return response.json();
}).then(data => {
    var nasa = $('.nasa');
    console.log('NASA Image Data Is:');
    console.log(data);
    for (var i = 0; i < data.collection.items.length; i++) {
        var nasaImageTitle = data.collection.items[i].data[0].title;
        var nasaImage = data.collection.items[i].links[0].href;
        // var nasaSideFetch = data.collection.items[i].href;
        // fetch(nasaSideFetch).then(newResponse => {return newResponse.json()}).then((linkData,nasaImage) => {
        //         var nasaImageArray = filterImageGallery(linkData,'.jpg');
        //         console.log(nasaImageArray);
        //         localStorage.setItem('Nasa Images', JSON.stringify(nasaImageArray));
        //         // var nasaVideoArray = filterImageGallery(linkData,'.mp4');
        //         var nasaImages = JSON.parse(localStorage.getItem('Nasa Images')) || [];
        //         function filterImageGallery(array, query) {
        //             return array.filter(function(jpg) {
        //                 return jpg.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        //         })
        //     }
        // })
        var nasaImageElement = $(`
            <div class="nasaImageElement element">
                <div class="nasaImageTitle elementTitle">
                    <div class="titleRow">
                        <span class="index">${i+1 + '. '}</span>
                        <a class="nasaImageLink elementLink" target="_blank" href="${nasaImage}">${nasaImageTitle}</a>
                    </div>
                    <span class="byLine"></span>
                </div>
                 <a class="nasaImageLink elementLink nasaImageSource" target="_blank" href="${nasaImage}">
                     <img class="nasaImage" src="${nasaImage}">
                 </a>
            </div>
             `);
        nasa.append(nasaImageElement);
    }
})