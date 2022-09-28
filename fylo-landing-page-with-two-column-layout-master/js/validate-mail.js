const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const submitMail = document.getElementById("submitMail");
const mailAlert = document.querySelector(".mailAlert");
let inputMail = document.forms.mailList.email;

submitMail.addEventListener("click", function (e) {
  event.preventDefault(e);
  if (inputMail.value.match(pattern)) {
    mailAlert.textContent = "Successfully registred";
    mailAlert.classList.remove("text-red-600");
    mailAlert.classList.add("text-green-800");
    mailAlert.classList.remove("hidden");
  } else {
    inputMail.classList.remove("border-dsBlue");
    inputMail.classList.add("border-red-500");
    mailAlert.classList.remove("hidden");
  }
});
