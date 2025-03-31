import { handleSearchInput } from "./header.js";
import { handlePostsControl, togglePostBtn } from "./posts.js";
import { getStories, toggleStoryBtn, clickScroll } from "./story.js";
import { executeChangeAppearance } from "./change-appearance.js";

const elements = {
    header: document.querySelector('header'),
    nav: document.querySelector('nav'),
    footer: document.querySelector('footer'),
    main: document.querySelector('main'),
    input: document.querySelector('.inputdiv'),
    searchIcon: document.querySelector('.divSearch'),
  };
  
function handleResize() {
    const isDesktop = window.innerWidth > 766;
    const isMobile = window.innerWidth < 502;
  
    // Toggle header, nav, footer, and main padding
    elements.nav.style.display = isDesktop ? 'flex' : 'none';
    elements.header.style.display = isDesktop ? 'none' : 'flex';
    elements.footer.style.display = isDesktop ? 'none' : 'flex';
    elements.main.style.paddingTop = isDesktop ? '0px' : '60px';
  
    // Toggle search elements
    elements.input.style.display = isMobile ? 'none' : 'flex';
    elements.searchIcon.style.display = isMobile ? 'flex' : 'none';
}

handleResize();
window.addEventListener('resize', handleResize);

handleSearchInput();

getStories().then(
  () => {
    executeChangeAppearance();
  })

clickScroll();
toggleStoryBtn();

handlePostsControl();
togglePostBtn();

let color = '';
export function toogleAppearance (value) {
  
  elements.header.style.filter = `invert(${value})`;
  elements.footer.style.filter = `invert(${value})`;
  elements.nav.style.filter = `invert(${value})`;

  color = value ? 'black' : 'white';
  elements.main.style.backgroundColor = color;
}