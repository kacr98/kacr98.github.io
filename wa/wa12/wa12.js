const quotebut = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
var endpoint = "https://supernatural-quotes-api.cyclic.app/quote/random";

let current = {
    question: "",
    answer: ""
}

async function getQuote() {
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        console.log(json);
        displayQuote(json.question);
        var answerbtn = document.querySelector('#js-tweet').addEventListener('click', () => displayAnswer(json.answer));


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

    function displayAnswer(answer){
        const answerText = document.querySelector('#js-answer-text');
        answerText.textContent = answer;
    }

    getQuote();

    function refresh(){
        const answerText = document.querySelector('#js-answer-text');
        answerText.textContent = "";
    }