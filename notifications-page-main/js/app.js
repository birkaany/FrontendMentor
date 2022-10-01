const counter = document.getElementById("notification-counter");
const markAllRead = document.getElementById("btn-MarkAllRead");
const notifications = document.querySelectorAll("#notifications ul li");
const unreadDots = document.querySelectorAll(".unreadDot");

updateCounter();

function updateCounter() {
  let unreadNotifications = document.querySelectorAll(".unread");
  counter.textContent = unreadNotifications.length;
}

notifications.forEach((notification) => {
  notification.addEventListener("click", function () {
    notification.classList.remove("unread");
    notification.classList.remove("bg-veryLightGrayishBlue");
    notification.querySelector(".unreadDot").classList.remove("unreadDot");
    if (notification.querySelector) updateCounter();
  });
});

markAllRead.addEventListener("click", function (e) {
  notifications.forEach((notification) => {
    event.preventDefault();
    notification.classList.remove("unread");
    notification.classList.remove("bg-veryLightGrayishBlue");
    notification.querySelector(".unreadDot").classList.remove("unreadDot");
  });
  updateCounter();
});
