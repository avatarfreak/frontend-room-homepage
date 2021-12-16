const menuOpenBtn = document.querySelector("[aria-label='open menu']");
const menuCloseBtn = document.querySelector("[aria-label='close menu']");
const nav = document.querySelector("[data-nav]");

const images = [...document.querySelectorAll("[data-image]")];
const infos = [...document.querySelectorAll("[data-info]")];
const btns = [...document.querySelectorAll("[data-btn]")];

let idx = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Get all data-active attribute
    const activeSlide = document.querySelectorAll("[data-active]");

    // increment of decrement of index onclik of the previous btn
    // or the next btn
    btn.dataset.btn === "next" ? idx++ : idx--;

    // if index is equal to the total number of the images, set it to the first image
    if (idx === images.length) {
      idx = 0;
    }

    // if index is less than 0, set it to the last image
    if (idx < 0) {
      idx = images.length - 1;
    }

    // make current slide visible
    images[idx].dataset.active = true;
    infos[idx].dataset.active = true;

    // hide other images
    delete activeSlide[0].dataset.active;

    // hide other infos
    delete activeSlide[1].dataset.active;
  });
});

// Toggle slider menu
const slideToggleMenu = (menuBtn, slideMenu) => {
  const menu = menuBtn.getAttribute("aria-expanded");
  if (menu === "false") {
    menuBtn.setAttribute("aria-expanded", "true");
    slideMenu.style.transform = "translateX(0)";
  } else {
    menuOpenBtn.setAttribute("aria-expanded", "false");
    nav.style.transform = "translateX(-100%)";
  }
};

menuOpenBtn.addEventListener("click", () => {
  slideToggleMenu(menuOpenBtn, nav);
});

// close navigation
menuCloseBtn.addEventListener("click", () => {
  slideToggleMenu(menuOpenBtn, nav);
});

// Display menu on when window screen is bigger or equal to 1024px
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    nav.style.transform = "translateX(0)";
  }
});
