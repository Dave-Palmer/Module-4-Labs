const artist = {
    name: "Van Gogh",
    portfolio: [
        {
            title: "portrait",
            url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"
        },
        {
            title: "sky",
            url: "https://mymodernmet.com/wp/wpcontent/uploads/2020/11/White-house-night-van-gohworldwide-2.jpg"
        },
    ]
}

artist.portfolio.forEach(element => {
    console.log(element.url)
});

console.log(artist.name + artist.portfolio[1].title)