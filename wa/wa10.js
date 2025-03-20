const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


let storyText = "It was 94 fahrenheit outside, so :insertx: wanted to party hard. When they got to :inserty:, they instantly :insertz: with a 300 pound brick. Bob saw the whole thing, but was not surprised — :insertx: was a huge jerk, and who even cares.";
let newStory = storyText;


const insertX = ["Eeby Deeby", "Madame Mamma Mia", "your father"];
const insertY = ["the club", "King Soopers", "the Senate"];
const insertZ = ["attacked an old man", "were arrested for murder", "took candy from a baby"];


function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

randomize.addEventListener('click', result);




function result() {

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);

    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace("Bob", name);
    }
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(300/14) + ' stone';
      const temperature =  Math.round((94-32)*(5/9)) + ' centigrade';
      newStory = newStory.replace("94 fahrenheit", temperature);
      newStory = newStory.replace("300 pound", weight);
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
    newStory = storyText;
  }