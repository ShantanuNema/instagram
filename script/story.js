import { toggleScrollButtons, clickScroll, handleResize } from "./toggle-scroll-buttons.js";

let input = document.getElementById('searchInput');
let searchInput = document.getElementById('searchIcon');
input.addEventListener(('focus'), () => {
    input.style.textIndent = "0px";
    searchInput.style.display = "none";
    input.style.color = "black";
});

input.addEventListener('blur', () => {
    input.style.textIndent = "26px";
    searchInput.style.display = "flex";
    input.style.color = "rgb(152, 152, 152)";
});

let storyContainer = '';
const stories = [
    {
        id: 1,
        url: 'images/image.png',
        name: 'fox'
    }, {
        id: 2,
        url: 'images/image.png',
        name: 'cat'
    }, {
        id: 3,
        url: 'images/image.png',
        access: 'private',
        name: 'corgi'
    }, {
        id: 4,
        url: 'images/image.png',
        name: 'elephant'
    }, {
        id: 5,
        url: 'images/image.png',
        access: 'private',
        name: 'cheese'
    }, {
        id: 6,
        url: 'images/image.png',
        name: 'panda'
    }, {
        id: 7,
        url: 'images/image.png',
        name: 'dragon'
    }, {
        id: 8,
        url: 'images/image.png',
        name: 'bird'
    }, {
        id: 9,
        url: 'images/image.png',
        name: 'monkey'
    }, {
        id: 10,
        url: 'images/image.png',
        name: 'penguin'
    }, {
        id: 2,
        url: 'images/image.png',
        access: 'private',
        name: 'cheese'
    }
].map((story) => {
    if (story.access === 'private') {
        storyContainer += `<div class="story-container">
            <div class="story-ring story-ring-private">
              <img class="story" src="images/image${story.id}.png" />
            </div>
            <div class="story-name">${story.name}</div>
          </div>`;
    } else {
        storyContainer += `<div class="story-container">
            <div class="story-ring">
              <img class="story" src="images/image${story.id}.png" />
            </div>
            <div class="story-name">${story.name}</div>
          </div>`;
    }
})

let storyBar = document.querySelector('.story-bar')
storyBar.innerHTML = storyContainer;

storyBar.addEventListener('scroll', toggleScrollButtons);
clickScroll();
toggleScrollButtons();

handleResize();
window.addEventListener('resize', handleResize);
