const rates = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".submitBtn");
const ratesSection = document.querySelector(".rates");
const heading = document.querySelector(".text-block h1");
const paraText = document.querySelector(".text-block p");
const imgTop = document.querySelector("picture img");
const mainDiv = document.querySelector(".rating-component");
const rateResult = document.querySelector(".rate-result");

rates.forEach(function (rate) {
  rate.addEventListener("click", function () {
    for (i = 0; i < rates.length; i++) {
      if (rates[i].classList.contains("active")) {
        rates[i].classList.remove("active");
      }
    }
    rate.classList.add("active");
    rateResult.innerHTML = `You selected ${rate.textContent} out of 5`;
    return rate;
  });
});

function showResults(rate) {
  heading.innerHTML = "Thank you!";
  paraText.innerHTML =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
  ratesSection.classList.add("hidden");
  submitBtn.classList.add("hidden");
  imgTop.src = "/images/illustration-thank-you.svg";
  imgTop.parentElement.classList.remove("bg-circle");
  mainDiv.style.alignItems = "center";
  mainDiv.style.textAlign = "center";
  mainDiv.style.justifyContent = "space-evenly";
  rateResult.classList.remove("hidden");
}

submitBtn.addEventListener("click", function () {
  showResults();
});
