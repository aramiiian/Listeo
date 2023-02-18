///----------------VARS---------------

//  NAVIGATION VARS
const header = this.document.querySelector("header");
const userNav = header.getElementsByClassName("userNav")[0];
const userNavdrop = userNav.getElementsByClassName("userNavdrop")[0];
const nav = header.getElementsByTagName("nav")[0];
let navActive = false;
let navWindActive = true;
const resp1024 = document.getElementsByClassName("respons1024")[0];

// ONESECTION SLIDER VARS
const oneWrapper = document.getElementsByClassName("wrapper")[0];
const oneSliderImg = oneWrapper.getElementsByTagName("img");
const oneDots = document.querySelector(".dots");
let ACTIVE = 0;

// THREESECTION SLIDER VARS
const threeWrapper = document.getElementsByClassName("threewrapper")[0];
const threeCard = document.getElementsByClassName("sld3");
let ACTIVE2 = 0;
const thdot1 = document.getElementsByClassName("thdot")[0];
const thdot2 = document.getElementsByClassName("thdot")[1];
///FUNCTIONS

function moveSliderTheree() {
  if (ACTIVE2 >= 4) ACTIVE2 = 0;
  if (ACTIVE2 <= -1) ACTIVE2 = threeCard.length - 1;
  for (let i of threeCard) {
    i.style.transform = `translate(${-ACTIVE2 * 110}%)`;
  }
}

function moveSlider() {
  if (ACTIVE >= oneSliderImg.length) ACTIVE = 0;
  if (ACTIVE <= -1) ACTIVE = oneSliderImg.length - 1;
  for (let j of oneSliderImg) {
    j.style.transform = `translate(${-ACTIVE * 100}%)`;
  }
}
function setDots() {
  for (let i of oneSliderImg) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    oneDots.appendChild(dot);
  }
}

function updateDots(e) {
  if (e) {
    for (let i = 0; i < oneDots.children.length; i++) {
      oneDots.children[i].classList.remove("selected");
      if (e.target === oneDots.children[i]) {
        ACTIVE = i;
        e.target.classList.add("selected");
        moveSlider();
      }
    }
  } else {
    for (let i = 0; i < oneDots.children.length; i++) {
      oneDots.children[i].classList.remove("selected");
      if (i === ACTIVE) oneDots.children[i].classList.add("selected");
    }
  }
}
// /LISTENERR
thdot1.addEventListener("click", (e) => {
  if (ACTIVE2 >= 3) moveSliderTheree((ACTIVE2 -= 3));
  if (ACTIVE2 >= 0) ACTIVE2;
});
thdot2.addEventListener("click", (e) => {
  if (ACTIVE2 >= 3) ACTIVE;
  if (ACTIVE2 <= 2) moveSliderTheree((ACTIVE2 += 3));
});
window.addEventListener("scroll", function () {
  if (window.innerWidth >= 1025) {
    header.classList.toggle("headerScroll", window.scrollY > 120);
  }
});

userNav.addEventListener("click", function () {
  userNavdrop.classList.toggle("userNavdropOn");
});

window.addEventListener("DOMContentLoaded", function () {
  setDots();
  updateDots();
});

oneDots.addEventListener("click", function (e) {
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
