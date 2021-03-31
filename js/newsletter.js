const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".newsletter");
const title = document.querySelector(".popup-title");
const emailInput = document.getElementById("email");
const emailForm = document.querySelector(".newsletter-form");
const btnClosePopup = document.querySelector(".close-newsletter");
const btnSignup = document.querySelector(".sign-up");
const body = document.body;

const emailList = [];

// Close Popup
const closePopup = function () {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
  body.classList.remove('overlay-active');
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
  title.textContent = "Thank you for signing up!";
});
