'use strict'


const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
 if(window.scrollY > navbarHeight) {
  //  console.log(scrollY);
  //  console.log(navbarHeight);
   navbar.classList.add('navbar--dark');
 } else {
   navbar.classList.remove('navbar--dark');
 }
});

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  // console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: 'smooth'});
});

const home =  document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(homeHeight);
  home.style.opacity = 1 - window.scrollY/homeHeight;
});
