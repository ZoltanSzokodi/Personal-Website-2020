// QUERY SELECTORS =================================================
const loaderPage = document.querySelector(".loader-page");
const mainContainer = document.querySelector(".main-container");

const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar-link");
const menuIcon = document.querySelector(".menu-icon");
const navbarLogo = document.querySelector(".navbar-logo");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const overlayLinks = document.querySelectorAll(".overlay-link");
const welcomeMsg = document.querySelector(".welcome-msg");
const aboutContainer = document.querySelector(".about-container");

const elementsToShow = document.querySelectorAll('.show-on-scroll');
const pageTopBtn = document.querySelector(".page-top-icon");

// Spinner before page load
const showPage = () => {
  loaderPage.style.display = "none";
  mainContainer.style.display = "block";
};

const loadPage = () => {
  setTimeout(showPage, 2000);
};

loadPage();

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
    welcomeMsg.classList.add("is-visible");
    pageTopBtn.style.opacity = 1;
    // sneaky go-around to fool javascript (changing the font-color and the :before pseudo class background-color)
    toggleColor("rgba(0, 0, 0, 1)", "dark");
  }
  else {
    navbar.style.padding = "1.5rem";
    navbar.style.backgroundColor = "transparent";
    navbarLogo.src = "./images/cubelogo.png";
    pageTopBtn.style.opacity = 0;
    // sneaky go-around to fool javascript (changing the font-color and the :before pseudo class background-color)
    toggleColor("rgba(255, 255, 255, 1)", "light");
  }
};

const openNav = () => {
  overlay.style.width = "100%";
  overlay.style.opacity = "1";
};

const closeNav = () => {
  overlay.style.width = "0%";
  overlay.style.opacity = "0";
};


// Detect request animation frame ===============================================
const scroll = window.requestAnimationFrame ||
  // IE Fallback
  function (callback) { window.setTimeout(callback, 1000 / 60) };

const loop = () => {

  elementsToShow.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
};

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


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
