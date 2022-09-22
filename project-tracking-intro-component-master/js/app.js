const menuToggleBtn = document.querySelector(".menuMobile img");
const menuMobile = document.querySelector("ul.menuDesktop");

menuToggleBtn.addEventListener("click", function () {
  if (menuMobile.classList.contains("menuMobile")) {
    menuMobile.classList.remove("menuMobile");
    menuToggleBtn.src = "/images/icon-hamburger.svg";
  } else {
    menuMobile.classList.add("menuMobile");
    menuToggleBtn.src = "/images/icon-close.svg";
  }
});
