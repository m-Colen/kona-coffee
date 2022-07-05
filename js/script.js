/********** Hamburger menu interactivity **********/

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
  toggleScrollBar();
};

// Locks scroll when mobile nav menu is open

const toggleScrollBar = () => {
  const body = document.body;
  body.classList.toggle("overflow-hidden");
};

hamMenu.addEventListener("click", toggleHamMenuDisplay);

/**********Footer **********/

// Toggles the display of an element
const toggleDisplay = (elem) => elem.classList.toggle("hidden");

const arrowButtons = document.querySelectorAll(".fa-angle-down");

arrowButtons.forEach((elem) => {
  switch (elem) {
    case elem.className === "fa-solid fa-angle-down about-link":
      elem.addEventListener("click", () => {
        const aboutHidden = document.querySelector("hidden-menu-about");
        toggleDisplay(aboutHidden);
        console.log(aboutHidden);
      });
  }
});
