/* Hamburger menu interactivity */

const hamMenu = document.querySelector(".hamburger-menu"); // Ham Menu Button

// Toggles ham menu display

const toggleHamMenuDisplay = () => {
  const hamMenuIcon = document.querySelector("#ham-menu-icon");
  const hamMenuClose = document.querySelector("#ham-menu-close");
  const hamMenuDisplay = document.querySelector(".mobile-nav-menu");
  hamMenuIcon.classList.toggle("hidden");
  hamMenuClose.classList.toggle("hidden");
  hamMenuDisplay.classList.toggle("block");
  hamMenuDisplay.classList.toggle("slide-in-right");
};

hamMenu.addEventListener("click", toggleHamMenuDisplay);
