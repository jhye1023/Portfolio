'use strict'


const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
 if(window.scrollY > navbarHeight) {
   navbar.classList.add('navbar--dark');
 } else {
   navbar.classList.remove('navbar--dark');
 }
});

const navbarMenu = document.querySelector('.navbar__menu');
const sendMessageBtn = document.querySelector('.home__contact');
const arrowBtn = document.querySelector('.arrow-up');
navbarMenu.addEventListener('click', (event) => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) {
    return;
  }
scrollIntoView(link);
});
sendMessageBtn.addEventListener('click', () => {
scrollIntoView('#contactMe')
});
arrowBtn.addEventListener('click', () => {
  scrollIntoView('#home')
});
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}

const home =  document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(homeHeight);
  home.style.opacity = 1 - window.scrollY/homeHeight;
});


const form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    status.setAttribute('class', 'success');
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    status.setAttribute('class', 'error');
  });
}
form.addEventListener("submit", handleSubmit);