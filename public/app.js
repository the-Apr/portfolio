const hamBurger= document.querySelector('#hamburger');
const menu= document.querySelector('#menu');
const mobileNav= document.querySelector('.mobile-nav');
const activeNav= document.querySelectorAll('a');

hamBurger.addEventListener('click', ()=>{
    console.log('clicked ham');
    mobileNav.classList.toggle('hidden');
});

activeNav.forEach(a =>{
    a.addEventListener('click', ()=>{
        console.log('yesss');
        activeNav.forEach(a => a.classList.remove('active'));
        a.classList.add('active');        
    });
});   
