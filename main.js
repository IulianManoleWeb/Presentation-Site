const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

function toggleNavMenu() {
   navMenu.classList.toggle('show-menu');
}

if (navToggle) {
   navToggle.addEventListener('click', toggleNavMenu);
}

if (navClose) {
   navClose.addEventListener('click', toggleNavMenu);
}

const navLink = document.querySelectorAll('nav-link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const ContactForm = document.getElementById('contact-form'),
   contactMessage = document.getElementById('contact-group')


window.onload = function() {
   document.getElementById('contact-form').addEventListener('submit', function(event) {
       event.preventDefault();
      
       emailjs.sendForm('service_gbr04um', 'template_s7ez3jp', '#contact-form', '0Nfg7Y6B16p8E_9kB')
           .then(function()  {
               console.log('SUCCESS!');
               document.getElementById('contact-form').reset()
           }, function(error) {
               console.log('FAILED...', error);
           });
         
   });
}
