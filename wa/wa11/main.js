const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pics = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg','pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alts = {'pic1.jpg' : 'alt', 'pic2.jpg' : "headshot of Detective Geudira", 'pic3.jpg' : 'alt', 'pic4.jpg' : 'alt','pic5.jpg' : 'alt'}

/* Looping through images */

for (const pic of pics) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `pics/${pic}`);
newImage.setAttribute('alt', alts[pics]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', event => {displayedImage.src = event.target.src});
newImage.addEventListener('click', event => {displayedImage.alt = event.target.alt});
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {

    const lightdark = btn.getAttribute('class');
        if (lightdark === 'dark') {
            btn.setAttribute("class", "light");
            btn.textContent = "LightMode";
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        }
        if (lightdark === 'light'){
            btn.setAttribute("class", "dark");
            btn.textContent = "DarkMode";
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
});