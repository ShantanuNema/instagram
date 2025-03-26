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

let commentInputs = document.querySelectorAll('.comment-input');
let postBtns = document.querySelectorAll('.post-btn');

function togglePostBtn() {
    commentInputs.forEach((input, index) => {
        let postBtn = postBtns[index];
        if (input.value.trim() === "") {
            postBtn.style.display = "none";
        } else {
            postBtn.style.display = "inline";
        }
    });
}

togglePostBtn();
commentInputs.forEach((input) => {
    input.addEventListener('input', togglePostBtn);
});

let container = document.querySelector('.story-bar')
container.innerHTML = storyContainer;

container.addEventListener('scroll', toggleScrollButtons);
clickScroll();
toggleScrollButtons();

handleResize();
window.addEventListener('resize', handleResize);

// window.addEventListener('resize', () => {
//     slideLeft();
//     slideRight();
// });

const postCards = document.querySelectorAll('.post-card');

    postCards.forEach((postCard) => {
        let container = postCard.querySelector('.post-image-container')
        let prv = postCard.querySelector('.prv');
        let next = postCard.querySelector('.next');

        prv.addEventListener('click', () => {
            slideLeft(container);
            toggleControlButtons(container, prv, next);
        });
        next.addEventListener('click', () => {
            slideRight(container);
            toggleControlButtons(container, prv, next);
        });

        toggleControlButtons(container, prv, next);
    });

    function slideLeft (container) {
        container.scrollBy({ left: -container.clientWidth, behavior: "smooth" });
    }
    
    function slideRight (container) {
        container.scrollBy({ left: container.clientWidth + 1, behavior: "smooth" });
    }

    function toggleControlButtons(container, prv, next) {
        // console.log(Math.round(container.scrollLeft) + ' ' + container.clientWidth  +  ' ' + container.scrollWidth);

        if (container.scrollLeft > 0) {
            prv.style.display = 'block';
            console.log(container.scrollLeft);
        } else {
            prv.style.display = 'none';
            console.log(container.scrollLeft);
        }
    
        if (container.clientWidth >= container.scrollWidth) {
            next.style.display = 'block';
            console.log(container.clientWidth);
        }
        else if (Math.round(container.scrollLeft) + container.clientWidth >= container.scrollWidth) {
            next.style.display = 'none';

        } else {
            next.style.display = 'block';
        }
    }

