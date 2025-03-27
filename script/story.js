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

const postCards = document.querySelectorAll('.post-card');let count = 0;

postCards.forEach((postCard) => {
    
    let container = postCard.querySelector('.post-image-container');
    let prv = postCard.querySelector('.prv');
    let next = postCard.querySelector('.next')
    
    let pagination = postCard.querySelector('.pagination');

    let images = container.querySelectorAll('img');
    let totalImages = images.length;

    // Clear pagination before adding new bullets
    pagination.innerHTML = "";

    if (totalImages > 1) {
        for (let i = 0; i < totalImages; i++) {
            let bullet = document.createElement("span");
            bullet.classList.add("bullet");
            if (i === 0) bullet.classList.add("active"); // Set first bullet as active
            pagination.appendChild(bullet);
        }
    }

    slideImage(container, prv, next, pagination);

    prv.addEventListener('click', () => {
        count--;
        slideImage(container, prv, next, pagination);
    });

    next.addEventListener('click', () => {
        count++;
        slideImage(container, prv, next, pagination);
    });

    images.forEach((image, index) => {
        image.style.left = `${index * 100}%`;
    });
});

function slideImage (container, prv, next, pagination) {
    let images = container.querySelectorAll('img');
    
    images.forEach((image) => {
        image.style.transform = `translateX(-${count * 100}%)`;
    });

    let totalImages = container.querySelectorAll('img').length;
    prv.style.display = count === 0 ? 'none' : 'block';
    next.style.display = count === totalImages - 1 ? 'none' : 'block';

    if (pagination) {
        let bullets = pagination.querySelectorAll('.bullet');
        bullets.forEach((bullet, index) => {
            bullet.classList.toggle('active', index === count);
        });
    }
}
