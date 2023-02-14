///----------------VARS---------------

//  NAVIGATION VARS
const header = this.document.querySelector("header");
const userNav = header.getElementsByClassName("userNav")[0];
const userNavdrop = userNav.getElementsByClassName("userNavdrop")[0];
const nav = header.getElementsByTagName("nav")[0];
let navActive = false;
let navWindActive = true;

// SLIDER VARS
const wrapper = document.getElementsByClassName("wrapper")[0];
const sliderImg = wrapper.getElementsByTagName("img");
const dots = document.querySelector(".dots");
let ACTIVE = 0;

const resp1024 = document.getElementsByClassName("respons1024")[0];

///FUNCTIONS

function moveSlider() {
  if (ACTIVE >= sliderImg.length) ACTIVE = 0;
  if (ACTIVE <= -1) ACTIVE = sliderImg.length - 1;
  for (let i of sliderImg) {
    i.style.transform = `translate(${-ACTIVE * 100}%)`;
  }
}
function setDots() {
  for (let i of sliderImg) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
  }
}

function updateDots(e) {
  if (e) {
    for (let i = 0; i < dots.children.length; i++) {
      dots.children[i].classList.remove("selected");
      if (e.target === dots.children[i]) {
        ACTIVE = i;
        e.target.classList.add("selected");
        moveSlider();
      }
    }
  } else {
    for (let i = 0; i < dots.children.length; i++) {
      dots.children[i].classList.remove("selected");
      if (i === ACTIVE) dots.children[i].classList.add("selected");
    }
  }
}
///LISTENERR

window.addEventListener("scroll", function () {
  if (window.innerWidth >= 1025) {
    header.classList.toggle("headerScroll", window.scrollY > 120);
    console.log(window.innerWidth);
  }
});

userNav.addEventListener("click", function () {
  userNavdrop.classList.toggle("userNavdropOn");
});

window.addEventListener("DOMContentLoaded", function () {
  setDots();
  updateDots();
});

dots.addEventListener("click", function (e) {
  if (!e.target.classList.contains("dot")) return;
  updateDots(e);
});

resp1024.addEventListener("click", function () {
  navActive = !navActive;

  navActive ? (nav.style.left = 0) : (nav.style.left = "-450px");
});
// window.addEventListener("click", function () {
//   navWindActive = !navWindActive;
//   navWindActive ? (nav.style.left = "-400px") : (navActive = !navActive);
// });
setInterval(() => {
  moveSlider(ACTIVE++);
  updateDots();
}, 5000);
