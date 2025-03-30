import { toogleAppearance } from "./index.js";

export function func() {
    const toggleMode = document.querySelector('.appearance');
    const paragraph = document.querySelectorAll('p');
    const socialBtns = document.querySelectorAll('.social-buttons');
    const commentBox = document.querySelectorAll('.comment-box');
    const storiesRing = document.querySelectorAll('.story');
    const likedImagesRing = document.querySelectorAll(".likes img");
    
    toggleMode.addEventListener('click', changeAppearance);

    let isDarkMode = true;
    function changeAppearance () {

        toggleMode.src = isDarkMode ? 'icons/light-mode.png' : 'icons/dark-mode.png';
        toogleAppearance(isDarkMode ? 1 : 0);
    
        const textColor = isDarkMode ? 'white' : 'black';
        const borderColor = isDarkMode ? 'black' : 'white';
        const filterValue = `invert(${isDarkMode ? 1 : 0})`;
    
        paragraph.forEach(p => p.style.color = textColor);
        storiesRing.forEach(ring => ring.style.borderColor = borderColor);
        socialBtns.forEach(socialBtn => socialBtn.style.filter = filterValue);
        commentBox.forEach(elements => elements.style.filter = filterValue);
        likedImagesRing.forEach(image => image.style.borderColor = borderColor);
        
        isDarkMode = !isDarkMode;
    }
}