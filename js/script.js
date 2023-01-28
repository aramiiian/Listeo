///VARS
const header = this.document.querySelector("header");
const userNav = header.getElementsByClassName("userNav")[0];
const userNavdrop = userNav.getElementsByClassName("userNavdrop")[0];
const oneHead = document.getElementsByClassName("oneHead")[0];
const oneH1 = oneHead.getElementsByTagName("h1")[0];

///FUNCTIONS
function titleAnim() {
  const titText = ["Restaurants", "Hotels", "Attractions"];
  let line = 0;
  let count = 0;
  let out = "";

  function typeTitle() {
    let interval = setTimeout(() => {
      out += titText[line][count];
      oneH1.innerText = out + "|";
      count++;
      if (count >= titText[line].length) {
        return;
      }

      typeTitle();
    }, 300);
  }
  typeTitle();
}

function titleAnimation() {
  const TITLES = ["Restaurants", "Hotels", "Attractions"];

  //   function animate(index) {
  //     if (index >= TITLES.length) {
  //       animate(0);

  //       return;
  //     }

  //     const title = TITLES[index];

  //     title.split("").forEach((character) => {
  //       setTimeout(() => {
  //         oneH1.innerText = oneH1.innerText + character;
  //       }, 300);
  //     });
  //   }

  //   animate(0);
}

///LISTENERR

window.addEventListener("scroll", function () {
  header.classList.toggle("headerScroll", window.scrollY > 120);
});

userNav.addEventListener("click", function () {
  userNavdrop.classList.toggle("userNavdropOn");
});

window.addEventListener("DOMContentLoaded", function () {
  titleAnimation();
  titleAnim();
});
