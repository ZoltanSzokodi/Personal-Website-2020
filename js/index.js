// QUERY SELECTORS =================================================
const navbar = document.querySelector(".navbar");
const menuIcon = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");


// EVENT LISTENER FUNCTIONS ========================================

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = ".5rem 0rem";
    navbar.style.backgroundColor = "rgba(255, 255, 255, .98)";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    navbar.style.padding = "1.5rem 0rem";
    navbar.style.backgroundColor = "rgba(0, 0, 0, .1)";
    // document.getElementById("logo").style.fontSize = "35px";
  }
};

const openNav = () => {
  overlay.style.height = "100%";
};

const closeNav = () => {
  overlay.style.height = "0%";
};


// ADD EVENT LISTENERS =============================================
window.addEventListener("scroll", scrollFunction);
menuIcon.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);



