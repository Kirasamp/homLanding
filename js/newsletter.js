// Element Selection
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".newsletter");
const title = document.querySelector(".popup-title");
const emailInput = document.getElementById("email");
const emailForm = document.querySelector(".newsletter-form");
const btnClosePopup = document.querySelector(".close-newsletter");
const btnSignup = document.querySelector(".sign-up");
const btnNewsletter = document.querySelector(".menu-newsletter");
const body = document.body;

const emailList = [];

// Open Popup
btnNewsletter.addEventListener("click", function () {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.classList.add("overlay-active");
});

// Close Popup
const closePopup = function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove("overlay-active");
};

overlay.addEventListener("click", closePopup);

btnClosePopup.addEventListener("click", closePopup);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !popup.classList.contains("hidden")) {
    closePopup();
  }
});

// Submit Email
btnSignup.addEventListener("click", function (e) {
  e.preventDefault();

  emailList.push(emailInput.value);
  emailForm.classList.add("hidden");
  document.querySelector(".img--newsletter").src =
    "../img/newsletter-thanks.jpg";
});
