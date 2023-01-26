///VARS
const header = this.document.querySelector("header");
const userNav = header.getElementsByClassName("userNav")[0];
const userNavdrop = userNav.getElementsByClassName("userNavdrop")[0];

///FUNCTIONS

///LISTENERR

window.addEventListener("scroll", function () {
  header.classList.toggle("headerScroll", window.scrollY > 120);
});

userNav.addEventListener("click", function () {
  userNavdrop.classList.toggle("userNavdropOn");
});
