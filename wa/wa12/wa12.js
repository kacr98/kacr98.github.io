const quotebut = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
var endpoint = "https://kimiquotes.pages.dev/api/quote";

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
        displayQuote(json.quote);
        var answerbtn = document.querySelector('#js-tweet').addEventListener('click', () => displayYear(json.year));


        } catch(err) {
            console.log(err);
            alert('fail');
        }
    }

    async function displayQuote(quote) {
        const quoteText = document.querySelector('#js-quote-text');
        
        quoteText.textContent = quote;
        refresh();

    }

    async function displayYear(year){
        const yearText = document.querySelector('#js-answer-text');
        yearText.textContent = year;
    }

    getQuote();

    function refresh(){
        const yearText = document.querySelector('#js-answer-text');
        yearText.textContent = "";
    }