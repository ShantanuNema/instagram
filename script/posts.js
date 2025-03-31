const postContainer = document.querySelector('.posts-container');
let posts = '';
const postsCard = 
    [{
    profileImage: 'images/image5.png',
    name: 'cheese_🧀🧀',
    location: 'refrigerator..',
    time: '15h',
    posts: ['https://picsum.photos/id/213/480/585', 'https://picsum.photos/id/215/480/585', 'https://picsum.photos/id/209/480/585', 'https://picsum.photos/id/113/480/585', 'https://picsum.photos/id/231/536/354', 'https://picsum.photos/536/354', 'https://picsum.photos/id/230/536/354', 'https://picsum.photos/id/229/536/354', 'https://picsum.photos/id/228/536/354', 'https://picsum.photos/id/227/536/354', 'https://picsum.photos/id/294/536/354'],
    likes: {
        number: 150,
        images: ['images/image2.png', 'images/image1.png', 'images/image7.png']
    },
    caption: 'yummy_😋🤌🏻'
    },{
        profileImage: 'images/image8.png',
        name: 'bird_🕊🕊',
        location: 'sky..',
        time: '1d',
        posts: ['https://picsum.photos/id/283/480/585', 'https://picsum.photos/id/115/480/585', 'https://picsum.photos/id/191/480/585'],
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
    
postsCard.forEach((post, index) => {
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
              <p>${post.likes.number} likes</p>
            </div>
            <div>
              <p class="caption">${post.caption}</p>
              <div class="view-comments">View all 34 comments</div>
            </div>
            <div class="comment-box">
              <input
                type="text"
                placeholder="Add a comment..."
                class="comment-input"
              />
              <button class="post-btn" type="submit" >Post</button>
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

export function handlePostsControl () {

    postCards.forEach((postCard) => {
    
        const container = postCard.querySelector('.post-image-container');
        const prv = postCard.querySelector('.prv');
        const next = postCard.querySelector('.next')
        const pagination = postCard.querySelector('.pagination');
        const images = container.querySelectorAll('img');
        const totalImages = images.length;
        
        let countObj = { value: 0 };
        // Enable swipe gesture on mobile
        addSwipeEvents(container, images, prv, next, pagination, countObj);

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
    
        slideImage(images, prv, next, pagination, countObj);
    
        prv.addEventListener('click', () => {
            countObj.value--;
            slideImage(images, prv, next, pagination, countObj);
        });
    
        next.addEventListener('click', () => {
            countObj.value++;
            slideImage(images, prv, next, pagination, countObj);
        });
    
        images.forEach((image, index) => {
            image.style.left = `${index * 100}%`;
        });
    });
}

function addSwipeEvents(container, images, prv, next, pagination, countObj) {
    
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
            if (countObj.value > 0) {
                countObj.value--;
                slideImage(images, prv, next, pagination, countObj);
            }
        } else if (swipeDistance < -threshold) {
            // Swipe left (next image)
            let totalImages = container.querySelectorAll("img").length;
            if (countObj.value < totalImages - 1) {
                countObj.value++;
                slideImage(images, prv, next, pagination, countObj);
            }
        }
    });
}


function slideImage (images, prv, next, pagination, countObj) {   
    
    images.forEach((image) => {
        image.style.transform = `translateX(-${countObj.value * 100}%)`;
    });

    let totalImages = images.length;

    prv.style.display = countObj.value === 0 ? 'none' : 'block';
    next.style.display = countObj.value === totalImages - 1 ? 'none' : 'block';

    if (pagination) {
        let bullets = pagination.querySelectorAll('.bullet');
        bullets.forEach((bullet, index) => {
            bullet.classList.toggle('active', index === countObj.value);
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