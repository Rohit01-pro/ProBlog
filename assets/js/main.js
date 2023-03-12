const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const sideNav = document.querySelector("#side-bar");
const overlay = document.querySelector("#overlay");

menuIcon.addEventListener("click", () => {
  sideNav.classList.add("slide");
  overlay.classList.add("show");
  document.body.classList.add("no-scroll");
});

closeIcon.addEventListener("click", () => {
  sideNav.classList.remove("slide");
  overlay.classList.remove("show");
  document.body.classList.remove("no-scroll");
});

overlay.addEventListener("click", () => {
  sideNav.classList.remove("slide");
  overlay.classList.remove("show");
  document.body.classList.remove("no-scroll");
});


// Search
const searchIcon = document.querySelector(".search-icon");
const searchClose = document.querySelector(".search-close");
const searchWrapper = document.querySelector(".search-wrapper");

searchIcon.addEventListener("click", () => {
  searchWrapper.classList.add("show");
  document.body.classList.add("no-scroll");
});

searchClose.addEventListener("click", () => {
  searchWrapper.classList.remove("show");
  document.body.classList.remove("no-scroll");
});

//  Scroll Events
const header = document.querySelector("#header");
const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
const rootElement = document.documentElement;
var prevYpos = window.pageYOffset;

window.onscroll = () => {
  let scrollTop = rootElement.scrollTop;

  if (scrollTop >= 100) header.classList.add("fixed");
  else header.classList.remove("fixed");

  // Scroll to top button
  if (scrollTop >= 200) scrollToTopBtn.classList.add("show");
  else scrollToTopBtn.classList.remove("show");

  // Navbar slide
  var currentYpos = window.pageYOffset;
  if (prevYpos > currentYpos) {
    header.style.top = "0";
  } else {
    header.style.top = "-100%";
  }
  prevYpos = currentYpos;
};

// Scroll to Top
scrollToTopBtn.addEventListener("click", () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



const headListArr = document.querySelectorAll(".head-list");

headListArr.forEach((headList)=>{
  let icon = headList.querySelector(".material-icons");
  let dropdownList = headList.nextElementSibling;

  headList.addEventListener("click", ()=>{

    if (dropdownList.style.maxHeight) {
      dropdownList.style.maxHeight = null;
      icon.style.transform = "rotate(-90deg)";
    } else {
      dropdownList.style.maxHeight = dropdownList.scrollHeight + "px";
      icon.style.transform = "rotate(-180deg)";
    }
  });

});


// Banner Owl Carousel
// $(document).ready(function () {
//   $("#banner-section .owl-carousel").owlCarousel({
//     loop: true,
//     nav: false,
//     items: 1,
//     center: true,
//     touch: true,
//   });
// });

// Post Slider
$(document).ready(function () {
  $("#slider-posts .owl-carousel").owlCarousel({
    nav: true,
    items: 4,
    touch: true,
    margin: 15,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});
