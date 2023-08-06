/*MENU ICON*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};



/*Scroll sections*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });



  /*STICKY NAVBAR*/
  let header = document.querySelector('.header');

  header.classList.toggle('sticky', window.scrollY > 100);


/* remove menu icon navnar when click navbar link*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


};


/*DARK MODE LIGHT  MODE*/

let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

var typed = new Typed('.typing-2', {
    strings: ['Developer', 'Programmer', 'Student', 'Content Writer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});






/*scroll reveal*/
 ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
   });

   ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
   ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
   ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left'});
   ScrollReveal().reveal('.home-content h3, .about-content, .home-content p' , { origin: 'right'});
