// change navbar styles onscroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', scrollY > 0)
});

// ===================ACCORDION SKILLS======================

const skillsContent = document.getElementsByClassName('.skills__content'),
skillHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className
    for ( i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    } else {
        this.parentNode.className = 'skills__content skills__close'
    }
}

skillHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// show/hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn")

menuBtn.addEventListener('click', () => {
    menu.style.display  = "flex";
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
})

// close nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
}

closeBtn.addEventListener("click", closeNav)

// ==================SHOW SCROLL UP =================
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher thann 560 viewport height, add the show-scroll class to the a tag with the scroll
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)