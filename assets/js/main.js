const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const sideNav = document.querySelector('#side-nav');
const overlay = document.querySelector('#overlay');


menuIcon.addEventListener("click", ()=>{
  sideNav.classList.add("slide");
  overlay.classList.add("show");
});

closeIcon.addEventListener("click", ()=>{
  sideNav.classList.remove("slide");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", ()=>{
  sideNav.classList.remove("slide");
  overlay.classList.remove("show");
});


// Search
const searchIcon = document.querySelector(".search-icon");
const searchClose = document.querySelector(".search-close");
const searchWrapper = document.querySelector(".search-wrapper");

searchIcon.addEventListener("click",()=>{
  searchWrapper.classList.add("show");
});

searchClose.addEventListener("click",()=>{
  searchWrapper.classList.remove("show");
});


//  Scroll Events
const navBar = document.querySelector("#navbar");
const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
const rootElement = document.documentElement;
var prevYpos = window.pageYOffset;

window.onscroll = () => {
  // Scroll to top button
  if (rootElement.scrollTop > 400) {
    scrollToTopBtn.style.right = "20px";
  } else if (rootElement.scrollTop < 300) {
    scrollToTopBtn.style.right = "-60px";
  }

  // Navbar slide
  var currentYpos = window.pageYOffset;
  if (prevYpos > currentYpos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-100%";
  }
  prevYpos = currentYpos;
  };


// Scroll to Top
scrollToTopBtn.addEventListener("click", ()=>{
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});







// Banner Owl Carousel
$(document).ready(function () {
    $("#banner-section .owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      items: 1,
      center: true,
      touch: true
    });
});

// Post Slider
$(document).ready(function () {
  $("#slider-posts .owl-carousel").owlCarousel({
    nav: false,
    items: 4,
    touch: true,
    margin:15,
    responsive: {
      0:{
        items: 1
      },
      600:{
        items: 2
      },
      992:{
        items: 3
      },
      1200: {
        items: 4
      }
    },
  });
});