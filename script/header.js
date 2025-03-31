let input = document.getElementById('searchInput');
let searchInput = document.getElementById('searchIcon');

export function handleSearchInput () {
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
}
