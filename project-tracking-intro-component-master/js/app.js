const menuToggleBtn = document.querySelector(".menuMobile img");
const menuMobile = document.querySelector("ul.menuDesktop");

menuToggleBtn.addEventListener("click", function () {
  if (menuToggleBtn.src == "/images/icon-hamburger.svg") {
    menuToggleBtn.src = "/images/icon-close.svg";
    console.log("açtık");
  } else {
    console.log("kapadık");
  }
});
