document.querySelector('.story-bar').
addEventListener('scroll', toggleScrollButtons);

let storyBar = document.querySelector('.story-bar');
let leftToggle = document.querySelector('.story-shift-left');
let rightToggle = document.querySelector('.story-shift-right');

function toggleScrollButtons() {
    if (storyBar.scrollLeft > 1) {
        leftToggle.innerHTML = `<img src="images/left-shift-icon.png" />`;
    } else {
        leftToggle.innerHTML = '';
    }

    if (storyBar.clientWidth >= storyBar.scrollWidth) {
        rightToggle.innerHTML = '';
    }
    else if (storyBar.scrollLeft + storyBar.clientWidth > storyBar.scrollWidth) {
        rightToggle.innerHTML = '';
    } else {
        rightToggle.innerHTML = `<img src="images/right-shift-icon.png" />`;
    }
}

toggleScrollButtons();

rightToggle.addEventListener('click', () => {
    storyBar.scrollBy({ left: 320, behavior: "smooth" });
});

leftToggle.addEventListener('click', () => {
    storyBar.scrollBy({ left: -320, behavior: "smooth" });
})