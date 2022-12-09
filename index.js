const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobileM');
const links = document.querySelector('.mobileM nav');
const darkFilter = document.querySelector('.dark');

openMenu.addEventListener('click', () => {
    mobileMenu.style.display = "block";
    mobileMenu.style.width = "70%";
    closeMenu.style.opacity = "1";
    links.style.opacity = "1";
    darkFilter.style.display="block"
});
closeMenu.addEventListener('click', () => {
    mobileMenu.style.width = "0";
    closeMenu.style.opacity = "0";
    links.style.opacity = "0";
    darkFilter.style.display="none"
})