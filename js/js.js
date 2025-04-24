//alert("Entering your phone number sucks. Hopefully this is more entertaining for you!\n\nUse the pause and play button to enter your phone number whenever you feel like it.");

var video = document.getElementById("video");


// Get the button
var btn = document.getElementById("btn");

// digit to enter
var digit = 1;
let number = "";
let heading = document.getElementById("heading");

// my workaround for the fact that videos must be automuted on websites
if (digit = 1){
    let vid = document.getElementById("video");
    console.log("its working")
    vid.muted = false;
}

// Pause and play the video
function pausePlay() {
   
    if (digit < 11){
        if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";
        } else {
            video.pause();
            btn.innerHTML = "Play";

            // prompt user 
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

            } else{
                alert("you.. you didn't enter a single digit nuwmber. why not?\n\nyouw're huwrting my feewlings.\n\nTRY AGAIN.");
            }
            

            btn.innerHTML = "Pause";
            video.play();
        }       
    }
    else {
        btn.innerHTML = "Successfully entered! Enjoy the song!";
    }
}

