/** @format */
// Selectors
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const rootElement = document.documentElement;
const navIcon = document.getElementById("toggle-menu");

// Functions
const scrollToTop = () => {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const toggleBetweenClass = () => {
  document.querySelector("header nav ul").classList.toggle("show-header-nav");
};
// EventListener
scrollToTopBtn.addEventListener("click", scrollToTop);
navIcon.addEventListener("click", toggleBetweenClass);
