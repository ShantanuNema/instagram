const postContainer = document.querySelector('.posts-container');
let posts = '';
const postsCard = 
    [{
    profileImage: 'images/image5.png',
    name: 'fox_🧀🧀',
    location: 'earth..',
    time: '15h',
    posts: ['https://picsum.photos/id/213/480/585', 'https://picsum.photos/id/215/480/585', 'https://picsum.photos/id/209/480/585', 'https://picsum.photos/id/113/480/585', 'https://picsum.photos/id/231/536/354', 'https://picsum.photos/536/354', 'https://picsum.photos/id/230/536/354', 'https://picsum.photos/id/229/536/354', 'https://picsum.photos/id/228/536/354', 'https://picsum.photos/id/227/536/354', 'https://picsum.photos/id/226/536/354'],
    likes: {
        number: 150,
        images: ['images/image2.png', 'images/image1.png', 'images/image7.png']
    },
    caption: 'aesthetics_✨🤌🏻'
    },{
        profileImage: 'images/image8.png',
        name: 'bird_🕊🕊',
        location: 'sky..',
        time: '1d',
        posts: ['https://picsum.photos/id/283/480/585', 'https://picsum.photos/id/115/480/585', 'https://picsum.photos/id/709/480/585'],
        likes: {
            number: 129,
            images: ['images/image3.png', 'images/image4.png', 'images/image6.png']
        },
        caption: 'sky..🌫🌫'
    },{
        profileImage: 'images/image7.png',
        name: 'dragon__🐉🐉',
        location: 'china..',
        time: '4d',
        posts: ['https://picsum.photos/id/293/480/585', 'https://picsum.photos/id/15/480/585'],
        likes: {
            number: 2,
            images: ['images/image1.png', 'images/image10.png']
        },
        caption: ''
    },{
        profileImage: 'images/image1.png',
        name: 'fox_🦊🦊',
        location: 'forest..',
        time: '6d',
        posts: ['https://picsum.photos/id/27/480/585', 'https://picsum.photos/id/21/480/585', 'https://picsum.photos/id/39/480/585', 'https://picsum.photos/id/43/480/585', 'https://picsum.photos/id/44/480/585', 'https://picsum.photos/id/45/480/585'],
        likes: {
            number: 180,
            images: ['images/image9.png', 'images/image6.png', 'images/image4.png']
        },
        caption: 'jungle..🌲🌲'
    },{
        profileImage: 'images/image2.png',
        name: 'cat_🐱🐱',
        location: 'home..',
        time: '2w',
        posts: ['https://picsum.photos/id/40/480/585'],
        likes: {
            number: 151,
            images: ['images/image8.png', 'images/image9.png', 'images/image4.png']
        },
        caption: 'lazy_😴😴'
    },{
        profileImage: 'images/image9.png',
        name: 'monkey_🙉🙊🙈',
        location: 'jungle..',
        time: '3w',
        posts: ['https://picsum.photos/id/883/480/585', 'https://picsum.photos/id/875/480/585', 'https://picsum.photos/id/666/480/585', 'https://picsum.photos/id/888/480/585'],
        likes: {
            number: 112,
            images: ['images/image2.png', 'images/image1.png', 'images/image7.png']
        },
        caption: '🍌🦥'
    },{
        profileImage: 'images/image10.png',
        name: 'penguin_🐧🐧',
        location: 'antartica..',
        time: '1m',
        posts: ['https://picsum.photos/id/260/480/585', 'https://picsum.photos/536/354'],
        likes: {
            number: 150,
            images: ['images/image2.png', 'images/image1.png', 'images/image7.png']
        },
        caption: 'snow_⛄❄'
    }];
    
postsCard.map((post, index) => {
        posts += `<div class="post-card">
            <div class="post-header">
              <div class="profile-details">
                <div class="story-container">
                  <div class="story-ring story-ring-private post-profile-ring">
                    <img class="story post-profile" src="${post.profileImage}" />
                  </div>
                </div>
                <div class="name-and-location">
                  <p class="profile-name">${post.name}</p>
                  <p class="location">${post.location}</p>
                </div>
                <div class="time">${post.time}</div>
              </div>
              <img class="ellipsis" src="./icons/ellipsis.svg" />
            </div>
            <img class="prv" src="images/left-shift-icon.png" />
            <div class="post-image-container">
              ${getPosts(index)}
              <div class="pagination"></div>
            </div>
            <img class="next" src="images/right-shift-icon.png" />
            <div class="social-buttons">
              <div class="like-and-comment">
                <img class="like" src="icons/heart.png" />
                <img class="comment" src="icons/comment.png" />
              </div>
              <img class="save" src="icons/save.png" />
            </div>
            <div class="likes">
              ${getLikedImages(index)}
              <p>${post.likes.number}likes</p>
            </div>
            <div>
              <p class="caption">${post.caption}</p>
              <p class="view-comments">View all 34 comments</p>
            </div>
            <div class="comment-box">
              <input
                type="text"
                placeholder="Add a comment..."
                class="comment-input"
              />
              <button class="post-btn" type="submit">Post</button>
              <img class="emoji" src="icons/emoji.svg" />
            </div>
          </div>`;
});

function getPosts (index) {
    let posts = '';
    postsCard[index].posts.forEach((url) => {
        posts += `<img
                class="post-image"
                src="${url}"
              />`;
    })
    return posts;
}

function getLikedImages (index) {
    let likesImages = '';
    postsCard[index].likes.images.forEach((url) => {
        likesImages += `<img src="${url}" />`;
    });
    return likesImages;
}

postContainer.innerHTML = posts;

const postCards = document.querySelectorAll('.post-card');
let count = 0;

export function handlePostsControl () {
    postCards.forEach((postCard) => {
    
        let container = postCard.querySelector('.post-image-container');
        let prv = postCard.querySelector('.prv');
        let next = postCard.querySelector('.next')
        
        let pagination = postCard.querySelector('.pagination');
    
        let images = container.querySelectorAll('img');
        let totalImages = images.length;
        
        // Enable swipe gesture on mobile
        addSwipeEvents(container, prv, next, pagination);
    
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
}

function addSwipeEvents(container, prv, next, pagination) {
    let startX = 0;
    let endX = 0;
    let threshold = 50; // Minimum swipe distance to trigger slide

    container.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    container.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    container.addEventListener("touchend", () => {
        let swipeDistance = endX - startX;

        if (swipeDistance > threshold) {
            // Swipe right (previous image)
            if (count > 0) {
                count--;
                slideImage(container, prv, next, pagination);
            }
        } else if (swipeDistance < -threshold) {
            // Swipe left (next image)
            let totalImages = container.querySelectorAll("img").length;
            if (count < totalImages - 1) {
                count++;
                slideImage(container, prv, next, pagination);
            }
        }
    });
}


export function slideImage (container, prv, next, pagination) {
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

let commentInputs = document.querySelectorAll('.comment-input');
let postBtns = document.querySelectorAll('.post-btn');

export function togglePostBtn() {
    commentInputs.forEach((input, index) => {
        let postBtn = postBtns[index];
        if (input.value.trim() === "") {
            postBtn.style.display = "none";
        } else {
            postBtn.style.display = "inline";
        }
    });
}

commentInputs.forEach((input) => {
    input.addEventListener('input', togglePostBtn);
});
