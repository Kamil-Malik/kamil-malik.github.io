const btn = document.querySelector('mobile-toggle');
const menu = document.querySelector('mobile-menu');

btn.addEventListener('click', ()=> {
    menu.classList.toggle("hidden");
});