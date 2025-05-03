//alert("Entering your phone number sucks. Hopefully this is more entertaining for you!\n\nUse the pause and play button to enter your phone number whenever you feel like it.");

var video = document.getElementById("video");


// Get the button
var btn = document.getElementById("btn");

// phone number digit to enter
var digit = 1;
let number = "";
let heading = document.getElementById("heading");

// my workaround for the fact that videos must be automuted on websites
if (digit = 1){
    let vid = document.getElementById("video");
    console.log("its working")
    vid.muted = false;
}

// Generates random array of 10 numbers
function randomArray(min, max) {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomNumber);
    }
    return randomArray;
  }

const timesToStopAt = randomArray(1, 212);
console.log(timesToStopAt);
let test = timesToStopAt[0];
console.log(test);

// sorts the array
timesToStopAt.sort((function(a, b){return a-b}));
console.log(timesToStopAt);






// code that stops it at random times to allow you to enter a number
let i = 0;
let stopAtThisTimeNow = timesToStopAt[i];
console.log(timesToStopAt[i]);

if (digit <= 10){
    // event listener always checks current video time
    video.addEventListener("timeupdate", function(){
    if (video.currentTime >= stopAtThisTimeNow){
        
        // prompt user 
        video.pause();
        
        i += 1;
        stopAtThisTimeNow = timesToStopAt[i];
        console.log(stopAtThisTimeNow);

        let currentDigit = window.prompt("Please enter digit number " + digit + " of your phone number.", "");
        if (currentDigit == 1 || currentDigit == 2 || currentDigit == 3 || currentDigit == 4 || currentDigit == 5 
        || currentDigit == 6 || currentDigit == 7 || currentDigit == 8 || currentDigit == 9 || currentDigit == 0) {
            
            // update number to add next digit
            let digitString = currentDigit.toString();

            if (digit == 4 || digit == 7){
                number = number.concat("-");
                number = number.concat(digitString);
                heading.innerHTML = number;
            } else {
                number = number.concat(digitString);
                heading.innerHTML = number;
            }

            digit += 1;

            if (digit == 11){
                // changes the song when the number is fully entered
                heading.innerHTML = number + "<br><br>Successfully entered! Enjoy some calming lo-fi beats to help you study for finals!";
                
                video.src="endingvideo.mp4";
                video.currentTime = 0;
                console.log(video.src);
                video.play();
                        }

            video.play();

        } else{
            i -= 1;
            stopAtThisTimeNow = timesToStopAt[i];
            console.log(stopAtThisTimeNow);
            alert("you.. you didn't enter a single digit nuwmber. why not?\n\nyouw're huwrting my feewlings.\n\nTRY AGAIN.");
            video.play();

        }
    }
    });}


// button that starts the song
function playVid(){
        if (digit = 1){
            heading.innerHTML = "The music will pause randomly to let you enter a digit of your phonr number!";
        }
        btn.style.display = "none";
        video.play();
}

