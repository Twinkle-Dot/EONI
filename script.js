// DOM Selectors

const copyrightDate = document.querySelector(".copyright-date");
const findOutLink = document.querySelector(".scrollbutton");
const storySection = document.getElementById("story");
const imagesLarge = document.querySelectorAll(".img-view");
const gallery = document.querySelector("#gallery");
const imageContainer = document.querySelectorAll(".img-container");

// Copyright Date
copyrightDate.textContent = new Date().getFullYear();

//Event Listeners
findOutLink.addEventListener("click", (e) => {
  e.preventDefault();
  storySection.scrollIntoView({ behavior: "smooth" });
});
