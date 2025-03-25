let storyBar = document.querySelector('.story-bar');
let leftToggle = document.querySelector('.story-shift-left');
let rightToggle = document.querySelector('.story-shift-right');

export function toggleScrollButtons() {
    if (storyBar.scrollLeft > 1) {
        leftToggle.innerHTML = `<img src="images/left-shift-icon.png" />`;
    } else {
        leftToggle.innerHTML = '';
    }

    if (storyBar.clientWidth >= storyBar.scrollWidth) {
        rightToggle.innerHTML = '';
    }
    else if (Math.round(storyBar.scrollLeft) + storyBar.clientWidth >= storyBar.scrollWidth) {
        rightToggle.innerHTML = '';
    } else {
        rightToggle.innerHTML = `<img src="images/right-shift-icon.png" />`;
    }
}

export function clickScroll () {
rightToggle.addEventListener('click', () => {
    storyBar.scrollBy({ left: 320, behavior: "smooth" });
});

leftToggle.addEventListener('click', () => {
    storyBar.scrollBy({ left: -320, behavior: "smooth" });
})
}

let header = document.querySelector('header');
let  nav = document.querySelector('nav');
let footer = document.querySelector('footer');
let main = document.querySelector('main');

export function handleResize() {
    if (window.innerWidth > 766) {
        header.style.display = "none";
        footer.style.display = "none";
        nav.style.display = "flex";
        main.style.paddingTop = "0px";
    } else {
        nav.style.display = "none";
        header.style.display = "flex";
        footer.style.display = "flex";
        main.style.paddingTop = "60px";
    }
}