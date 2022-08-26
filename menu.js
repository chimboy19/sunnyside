const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.header-nav');

function openNavLinks(){
    if(navLinks.style.transform==='scaleX(1)'){
        navLinks.style.transform='scaleX(0)'
    }else{
        navLinks.style.transform='scaleX(1)'
    }
}

menuBtn.addEventListener('click',openNavLinks)