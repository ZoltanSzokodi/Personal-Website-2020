// QUERY SELECTORS =================================================
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar-link");
const menuIcon = document.querySelector(".menu-icon");
const navbarLogo = document.querySelector(".navbar-logo");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const overlayLinks = document.querySelectorAll(".overlay-link");
const welcomeMsg = document.querySelector(".welcome-msg");


// EVENT LISTENER FUNCTIONS ========================================
const toggleColor = (color, action) => {
  navbarLinks.forEach(link => {
    link.style.color = `${color}`;
    action === "dark" ?
      link.className = "navbar-link change-background" :
      link.className = "navbar-link";
  });
};

// When the user scrolls down 80px from the top of the document, run some animations
const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = ".5rem 1.5rem";
    navbar.style.backgroundColor = "rgba(255, 255, 255, .95)";
    navbarLogo.src = "./images/cubelogodark.png"
    welcomeMsg.classList.add("is-visible")
    // sneaky go-around to fool javascript (changing the font-color and the :before pseudo class background-color)
    toggleColor("rgba(0, 0, 0, 1)", "dark");
  }
  else {
    navbar.style.padding = "1.5rem";
    navbar.style.backgroundColor = "transparent";
    navbarLogo.src = "./images/cubelogo.png";
    // sneaky go-around to fool javascript (changing the font-color and the :before pseudo class background-color)
    toggleColor("rgba(255, 255, 255, 1)", "light");
  }
};

const openNav = () => {
  overlay.style.width = "100%";
};

const closeNav = () => {
  overlay.style.width = "0%";
};


// ADD EVENT LISTENERS =============================================
window.addEventListener("scroll", scrollFunction);
menuIcon.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
overlayLinks.forEach(link => link.addEventListener("click", closeNav));



// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     heroImg.src = "./images/banner-standing.jpg";
//   } else {
//     heroImg.src = "./images/abstract-banner.jpg";
//   }
// }

// var x = window.matchMedia("(max-width: 900px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes
