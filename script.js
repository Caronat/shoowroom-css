// CAROUSEL MENU
const carouselSection = document.getElementById("carousel-menu");
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".fa-chevron-left");
const nextBtn = document.querySelector(".fa-chevron-right");
const cellsCount = carousel.childElementCount;
let selectedIndex = 0;

carouselSection.addEventListener("wheel", (e) => {
  e.preventDefault();

  selectedIndex += Math.sign(e.deltaY);
  rotateCarousel();
});

const rotateCarousel = (i) => {
  if (i !== undefined) {
    const currentItem = selectedIndex % 7;
    let diff = i - currentItem;
    if (Math.abs(diff) > 7 / 2) {
      diff -= 7 * Math.sign(diff);
    }
    selectedIndex += diff;
  }
  const angle = (selectedIndex / cellsCount) * -360;
  carousel.style.transform = `translateZ(-218px) rotateY(${angle}deg)`;
};

prevBtn.addEventListener("click", () => {
  selectedIndex--;
  rotateCarousel();
});
nextBtn.addEventListener("click", () => {
  selectedIndex++;
  rotateCarousel();
});

// OVERLAY
const overlayContainer = document.querySelector("#overlay .container");
const optionsButton = document.querySelectorAll("#overlay .param input");

optionsButton.forEach((opt) => {
  opt.addEventListener("change", () => {
    const optionChecked = document.querySelector("#overlay input:checked");
    const link = document.querySelector("#overlay .info a");

    overlayContainer.classList = `container ${optionChecked.value}`;

    switch (optionChecked.value) {
      case "overlay1":
        link.href = "https://codepen.io/caronat/pen/PoGvXPP";
        break;
      case "overlay2":
        link.href = "https://codepen.io/caronat/pen/eYdabpV";
        break;
      case "overlay3":
        link.href = "https://codepen.io/caronat/pen/PoGvXZP";
        break;
      default:
        break;
    }
  });
});

// CURTAIN MENU
const btnCurtainMenu = document.getElementById("btn-curtain-menu");
const btnCloseCurtainMenu = document.getElementById("btn-close-curtain-menu");
const curtainMenu = document.getElementById("nav-curtain-menu");

const openCurtainMenu = () => {
  curtainMenu.style.width = "100%";
  curtainMenu.style.zIndex = 2000;
};

const closeCurtainMenu = () => {
  curtainMenu.style.width = "0%";
  curtainMenu.style.zIndex = 1000;
};

btnCurtainMenu.addEventListener("click", openCurtainMenu);
btnCloseCurtainMenu.addEventListener("click", closeCurtainMenu);
