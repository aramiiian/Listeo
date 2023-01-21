window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("headerScroll", window.scrollY > 100);
});
