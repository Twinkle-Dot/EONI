"use strict";

const countdown = document.querySelector(".countdown");
const storySection = document.querySelector("#story");
const storyContainer = document.querySelector(".story-container");
const storyImg = document.querySelector(".story-img");
const hubSection = document.querySelector("#hub");
const hubImages = document.querySelectorAll(".hub-img");
const bgImage = document.querySelector(".bg-image");
const loader = document.querySelector(".loader-wrapper");

// Loader on window load
window.onload = function () {
  loader.style.display = "none";
};
// Release Date Countdown

const releaseDate = new Date("August 25, 2022 00:00:00").getTime();

const interval = setInterval(function () {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
});

// intersection Observers

// //Refactored Functions

const callback = (entries) =>
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("unseen");
    } else {
      entry.target.classList.add("unseen");
    }
  });

const imgCallback = (entries) =>
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("seen");
    } else {
      entry.target.classList.add("seen");
    }
  });

// ////Observers

const storyObserver = new IntersectionObserver(callback, {
  root: null,
  rootMargin: "30px",
  threshold: 0.25,
});

const imgObserver = new IntersectionObserver(imgCallback, {
  root: null,
  rootMargin: "30px",
  threshold: 0.25,
});

const hubObserver = new IntersectionObserver(imgCallback, {
  root: null,
  threshold: 0.25,
});

// Applied Observers
storyObserver.observe(storyContainer);
imgObserver.observe(storyImg);
hubImages.forEach((img) => hubObserver.observe(img));
