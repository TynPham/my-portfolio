const navItem = document.querySelectorAll(".nav-item");
const listUl = document.querySelectorAll(".list li");
const header = document.querySelector("header");
const subNav = document.querySelector(".navigation");
const navHome = document.querySelectorAll(".home");
const navAbout = document.querySelectorAll(".about");
const navSkills = document.querySelectorAll(".skills");
const navProjects = document.querySelectorAll(".projects");
const navContact = document.querySelectorAll(".contact");

const POINT = window.innerHeight - 100;

function handleClick(list, currentItem) {
  list.forEach((item) => {
    item.classList.remove("active");
    currentItem.classList.add("active");
  });
}

function handleScroll() {
  const rangeTop = header.getBoundingClientRect().top * -1;
  if (rangeTop <= POINT * 0) {
    addActive(navHome);
  } else if (rangeTop < POINT * 1) {
    addActive(navHome);
  } else if (rangeTop < POINT * 2) {
    addActive(navAbout);
  } else if (rangeTop < POINT * 3) {
    addActive(navSkills);
  } else if (rangeTop < POINT * 4) {
    addActive(navProjects);
  } else {
    addActive(navContact);
  }

  if (rangeTop >= POINT) {
    subNav.classList.add("appear");
  } else {
    subNav.classList.remove("appear");
  }
}

function removeActive(list) {
  list.forEach((e) => {
    e.classList.remove("active");
  });
}

function addActive(list) {
  removeActive(navItem);
  removeActive(listUl);
  list.forEach((e) => {
    e.classList.add("active");
  });
}

// navItem.forEach((item) => {
//   item.addEventListener("click", () => handleClick(navItem, item));
// });

// listUl.forEach((item) => {
//   item.addEventListener("click", () => handleClick(listUl, item));
// });

window.addEventListener("scroll", handleScroll);
