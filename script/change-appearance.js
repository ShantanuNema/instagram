import { toogleAppearance } from "./index.js";

export function executeChangeAppearance() {
    const toggleMode = document.querySelector('.appearance');
    const paragraph = document.querySelectorAll('p');
    const socialBtns = document.querySelectorAll('.social-buttons');
    const commentBox = document.querySelectorAll('.comment-box');
    const storiesRing = document.querySelectorAll('.story');
    const likedImagesRing = document.querySelectorAll(".likes img");
    const ellipsis = document.querySelectorAll('.ellipsis');
    const input = document.getElementById('searchInput');

    toggleMode.addEventListener('click', changeAppearance);

    let isDarkMode = true;
    function changeAppearance () {

        toggleMode.src = isDarkMode ? 'icons/light-mode.png' : 'icons/dark-mode.png';
        toogleAppearance(isDarkMode ? 1 : 0);
    
        const textColor = isDarkMode ? 'white' : 'black';
        const borderColor = isDarkMode ? 'black' : 'white';
        const filterValue = `invert(${isDarkMode ? 1 : 0})`;
        const inputColor = isDarkMode ? '#d1d1d1' : '#ececec';
        
        input.style.backgroundColor = inputColor;
        paragraph.forEach(p => p.style.color = textColor);
        storiesRing.forEach(ring => ring.style.borderColor = borderColor);
        socialBtns.forEach((socialBtn) => {
            let images = socialBtn.querySelectorAll('img');
            images.forEach((img) => {
                img.style.filter = filterValue;
            });
            let svg = socialBtn.querySelector('svg');
            let pathElement = socialBtn.querySelector("path");
            let isLiked = svg.getAttribute('data-value');

            if (isLiked === 'false') {
                pathElement.setAttribute("fill", "none"); // Red fill
                pathElement.setAttribute("stroke", `${textColor}`); // White border
            }
        });

        commentBox.forEach(elements => elements.style.filter = filterValue);
        likedImagesRing.forEach(image => image.style.borderColor = borderColor);
        ellipsis.forEach(ellipsi => ellipsi.style.filter = filterValue);
        
        isDarkMode = !isDarkMode;
    }
}

function addEventTolikeBtn() {
    const postImage = document.querySelectorAll('.post-image-container');
    document.querySelectorAll('.like').forEach((svgElement, index) => {    
                
        svgElement.addEventListener("click", () => {
            toggleLikedBtn(svgElement);
            animation(svgElement);
        });

        postImage[index].addEventListener('dblclick', () => {
            toggleLikedBtn(svgElement)
            animation(svgElement);
        });

        function animation (svgElement) {
            svgElement.classList.add("clicked"); 
            // Remove the class after animation ends to allow re-triggering
            setTimeout(() => {
                svgElement.classList.remove("clicked");
            }, 300); // Duration matches animation time (0.3s)
        }

    });
}

function toggleLikedBtn (svgElement) {

    const toggleMode = document.querySelector('.appearance'); 
    let isDarkMode = toggleMode.src.endsWith('icons/dark-mode.png') ? false : true; 
    
    let pathElement = svgElement.querySelector("path");
    let isLiked = svgElement.getAttribute('data-value');


    if (isLiked === 'false') {
        pathElement.setAttribute("fill", "#dc2e2e"); // Red fill
        pathElement.setAttribute("stroke", "#dc2e2e"); // White border
        isLiked = 'true';
    } else {
        pathElement.setAttribute("fill", "none");
        
        if (isDarkMode) {
            console.log('adsjfl' + isDarkMode);
            pathElement.setAttribute("stroke", "white"); // White border
        } else {
            pathElement.setAttribute("stroke","black"); // White border
        }
        isLiked = 'false'
    }
    
    svgElement.setAttribute("data-value", isLiked);
}

addEventTolikeBtn();
