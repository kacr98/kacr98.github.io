const quotebut = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
var endpoint = "https://supernatural-quotes-api.onrender.com/quote/random";

let current = {
    quote: "",
    name: ""
}

async function getQuote() {
    try {
        const response = await fetch("https://supernatural-api.onrender.com/quotes/random")
        .then(res => res.json())
        .then(data => console.log(data));
        
        
        const namequote = json.parse('{"name":"", "quote":""}');
        document.getElementById('#js-quote-text').innerHTML = namequote.name;

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        console.log(json);
        displayQuote(json.quote);
        var namebtn = document.querySelector('#js-tweet').addEventListener('click', () => displayName(json.name));


        } catch(err) {
            console.log(err);
            alert('fail');
        }
    }

    function displayQuote(quote) {
        const quoteText = document.querySelector('#js-quote-text');
        
        quoteText.textContent = quote;
        refresh();

    }

    function displayName(name){
        const nameText = document.querySelector('#js-answer-text');
        nameText.textContent = name;
    }

    getQuote();

    function refresh(){
        const nameText = document.querySelector('#js-answer-text');
        nameText.textContent = "";
    }