const quotebut = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
var endpoint = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

let current = {
    quote: "",
    year: ""
}

async function getQuote() {
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        console.log(json);
        
        displayQuote(json);
        changePhoto();

        } catch(err) {
            console.log(err);
            alert('fail');
        }
    }

    ronPhotos = ['ron1.png', 'ron2.jpg', 'ron3.jpg'];

    async function changePhoto(){
      const photo = document.getElementById('ron');
      const randomIndex = Math.floor(Math.random() * ronPhotos.length);
      photo.src = ronPhotos[randomIndex];
    }

    async function displayQuote(json) {
        const quoteText = document.querySelector('#js-quote-text');
        quoteText.textContent = json;

        refresh();

    }

    getQuote();

    function refresh(){
    }