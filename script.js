const navItem = document.querySelectorAll(".nav-item");
const listUl = document.querySelectorAll(".list li");
const header = document.querySelector("header");
const subNav = document.querySelector(".navigation");
const navHome = document.querySelectorAll(".home");
const navAbout = document.querySelectorAll(".about");
const navSkills = document.querySelectorAll(".skills");
const navProjects = document.querySelectorAll(".projects");
const navContact = document.querySelectorAll(".contact");

const Home = document.querySelector("#home");
const About = document.querySelector("#about");
const Skills = document.querySelector("#skills");
const Projects = document.querySelector("#projects");

const rangeHome = Home.offsetHeight - 100;
const rangAbout = rangeHome + About.offsetHeight - 100;
const rangSkills = rangAbout + Skills.offsetHeight - 100;
const rangeProjects = rangSkills + Projects.offsetHeight - 300;

function handleScroll() {
  const rangeTop = header.getBoundingClientRect().top * -1;
  if (rangeTop < rangeHome) {
    addActive(navHome);
  } else if (rangeTop < rangAbout) {
    addActive(navAbout);
  } else if (rangeTop < rangSkills) {
    addActive(navSkills);
  } else if (rangeTop < rangeProjects) {
    addActive(navProjects);
  } else {
    addActive(navContact);
  }

  if (rangeTop >= rangeHome) {
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

window.addEventListener("scroll", handleScroll);

// text typing

var typed = new Typed(".auto-type", {
  strings: ["Pham Tuyen"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
