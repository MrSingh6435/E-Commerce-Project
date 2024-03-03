// Menue button click
let menu = document.querySelector("#menu");
let menu1 = document.querySelector("#menu1");
let closeMenu = document.querySelector("#close");
let sideBar = document.querySelector("#sideBar");

menu.addEventListener('click', () => {
    sideBar.classList.add('active');
})
menu1.addEventListener('click', () => {
    sideBar.classList.add('active');
})
closeMenu.addEventListener('click', () => {
    sideBar.classList.remove('active');
})

// Select Lanugage function
const languageSelector = document.getElementById('language');
languageSelector.addEventListener('change', function () {
    const selectedLanguage = languageSelector.value;
    console.log('Selected language:', selectedLanguage);
});

// Search Bar Logic to apply border
document.querySelector('#searchBar').addEventListener('focus', () => {
    document.querySelector('#navSearch').classList.add('active');
});
document.querySelector('#searchBar').addEventListener('blur', () => {
    document.querySelector('#navSearch').classList.remove('active');
});