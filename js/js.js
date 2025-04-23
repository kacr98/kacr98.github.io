alert("This is a test of Cloudfare's DDOS system.\nPress OK to consent to testing.");

var video = document.getElementById("video");

const pauseWhen = ["3", "10", "16", "20", "21", "25", "32", "33", "40"];

async function goThroughArray(array) {
    for (const time of array){
        if (video.currentTime >= array.time){
            await getNumber();
        }
    }
    console.log(array.time);
}

async function getNumber(){
    video.pause();
     // BUFFER ANIMATION
        // ALERT enter pausewhen.time - 1 digit
    window.prompt("Please enter digit" + array.time, "");
        // hide buffer
    video.play();
}


//for (let i = 0; i < pauseWhen.length; i++) {
    //console.log(pauseWhen[i]);
    //if (video.currentTime >= pauseWhen[i]){
        //video.pause();
        // BUFFER ANIMATION
        // ALERT enter pausewhen.time - 1 digit
        //window.prompt("Please enter digit" + pauseWhen.time, "");
        // hide buffer
        //video.play();}}

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function pausePlay() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

goThroughArray(pauseWhen);