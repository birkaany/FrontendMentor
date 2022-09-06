const rates = document.querySelectorAll(".rate");

rates.forEach(function (rate) {
  rate.addEventListener("click", function () {
    for (i = 0; i < rates.length; i++) {
      if (rates[i].classList.contains("active")) {
        rates[i].classList.remove("active");
      }
    }
    rate.classList.add("active");
    console.log(rate.innerHTML);
  });
});
