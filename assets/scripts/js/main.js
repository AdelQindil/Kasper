// --Back to top button
let toTopBtn = document.getElementById("scrollToTopBtn");

// *Show Back to top button when user scrolls away from top
document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    toTopBtn.classList.add("show-btn");
  } else {
    toTopBtn.classList.remove("show-btn");
  }
});

// *Scroll to top function
const toTop = () => {
  document.documentElement.scrollIntoView();
};

// --Mobile navigation menu
// Selectors
const navIcon = document.getElementById("toggle-menu");
const menu = document.querySelector("header nav ul");

// *Toggle menu function
const toggleBetweenClass = () => {
  menu.classList.toggle("show-header-nav");
};
// Link the function to the toggle menu icon
navIcon.addEventListener("click", toggleBetweenClass);
// Close the toggle menu when user clicks anywhere outside
document.addEventListener('click', function handleClickOutsideBox(e) {
  if (!navIcon.contains(e.target)) {
    menu.classList.remove("show-header-nav");
  };
});