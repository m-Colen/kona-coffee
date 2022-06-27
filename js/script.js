/* Hamburger menu interactivity */

const hamMenu = document.querySelector(".hamburger-menu"); // Ham Menu Button

// Toggles ham menu button display

const toggleHamMenuDisplay = () => {
  const hamMenuIcon = document.querySelector("#ham-menu-icon");
  const hamMenuClose = document.querySelector("#ham-menu-close");
  hamMenuIcon.classList.toggle("hidden");
  hamMenuClose.classList.toggle("hidden");
};

hamMenu.addEventListener("click", toggleHamMenuDisplay);
