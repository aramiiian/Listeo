///VARS
const header = this.document.querySelector("header");
const headerLi = header.getElementsByTagName("ul")[0];

///FUNCTIONS

///LISTENERR

window.addEventListener("scroll", function () {
  header.classList.toggle("headerScroll", window.scrollY > 120);
});
