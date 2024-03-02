let menu = document.querySelector("#menu");
menu.addEventListener('click', ()=>{
    console.log("Menu button is clicked");
})

// Select Lanugage function
const languageSelector = document.getElementById('language');
languageSelector.addEventListener('change', function () {
    const selectedLanguage = languageSelector.value;
    console.log('Selected language:', selectedLanguage);
});