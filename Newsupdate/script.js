const cardList = document.getElementById('card-list')
const newsFormTitle = document.getElementById("news-form-title")
const newsFormContent = document.getElementById("news-form-content")
const newsSubmitForm = document.getElementById('news-form')

let news = [
    { id: 1, title: 'News1', content: "bla" }, { id: 2, title: 'News2', content: "ble" }, { id: 3, title: 'News3', content: "blu" }
];

class News {
    constructor(id, title, content) {
        this.id = id
        this.title = title
        this.content = content
    }
}

function deleteChild() {
    let e = document.querySelector("#card-list");
    let first = e.firstElementChild;
    while (first) {
        first.remove();
        first = e.firstElementChild;
    }
}

function addNews(arr) {
    deleteChild()
    for (let item of arr) {
        const template = document.getElementById("news-card").content.cloneNode(true);
        template.querySelector('.news-title').innerText = item.title;
        template.querySelector('.news-content').innerText = item.content;
        document.querySelector('#card-list').appendChild(template);
    }
}

document.getElementById("form-submit").addEventListener("click", function (event) {
    event.preventDefault()
    let id = news.length + 1
    let title = newsFormTitle.value
    let content = newsFormContent.value
    let newsObj = new News(id, title, content)
    news.unshift(newsObj)
    newsSubmitForm.reset()
});

setInterval(() => addNews(news), 5000) 