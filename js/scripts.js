const NewsletterHandler = (parent) => {
  const init = () => {
    /*     // Element Selection
    const overlay = parent.querySelector(".overlay");
    const popup = parent.querySelector(".newsletter");
    const title = parent.querySelector(".popup-title");
    const emailInput = parent.getElementById("email");
    const emailForm = parent.querySelector(".newsletter-form");
    const btnClosePopup = parent.querySelector(".close-newsletter");
    const btnSignup = parent.querySelector(".sign-up");
    const body = parent.body;

    const emailList = [];

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
      title.textContent = "Thank you for signing up!";
    }); */
  };

  init();
};
const App = (() => {
  const init = () => {
    const body = document.body;
    // const header = document.querySelector('.layout-header');
    // const imageContainer = document.querySelectorAll('.image-container');
    // const carouselSlider = document.querySelector('.carousel-slider');
    const newsletter = document.querySelector(".newsletter");

    // if(header) {
    //   HeaderHandler(header, document.body);
    // }

    // if(imageContainer.length > 0) {
    //   for(let i = 0; i < imageContainer.length; i++) {
    //     LazyLoad(imageContainer[i]);
    //   }
    // }

    if (newsletter) {
      NewsletterHandler(newsletter);
    }

    // if(carouselSlider) {
    //   CarouselSlider(carouselSlider);
    // }
  };

  init();
})();
