let storiesContainer = document.querySelector('.story-bar');

export function getStories () {
    let stories = '';
    const storiesObj = [
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
        stories += `<div class="story-container">
            <div class="story-ring story-ring-private">
              <img class="story" src="images/image${story.id}.png" />
            </div>
            <div class="story-name">${story.name}</div>
          </div>`;
    } else {
        stories += `<div class="story-container">
            <div class="story-ring">
              <img class="story" src="images/image${story.id}.png" />
            </div>
            <div class="story-name">${story.name}</div>
          </div>`;
    }
    });
    storiesContainer.innerHTML = stories;
    storiesContainer.addEventListener('scroll', toggleStoryBtn);
}

let leftToggle = document.querySelector('.story-shift-left');
let rightToggle = document.querySelector('.story-shift-right');

export function toggleStoryBtn() {

    const scrollLeft = storiesContainer.scrollLeft;
    const scrollWidth = storiesContainer.scrollWidth;
    const clientWidth = storiesContainer.clientWidth;

    if (scrollLeft > 1) {
        leftToggle.innerHTML = `<img src="images/left-shift-icon.png" />`;
    } else {
        leftToggle.innerHTML = '';
    }

    if (clientWidth >= scrollWidth) {
        rightToggle.innerHTML = '';
    }
    else if (Math.round(scrollLeft) + clientWidth >= scrollWidth) {
        rightToggle.innerHTML = '';
    } else {
        rightToggle.innerHTML = `<img src="images/right-shift-icon.png" />`;
    }
}

export function clickScroll () {
    rightToggle.addEventListener('click', () => {
        storiesContainer.scrollBy({ left: 320, behavior: "smooth" });
    });
    
    leftToggle.addEventListener('click', () => {
        storiesContainer.scrollBy({ left: -320, behavior: "smooth" });
    })
}

