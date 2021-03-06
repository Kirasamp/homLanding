const NewsletterHandler = (newsletter, overlay) => {
  const init = () => {
    // Element Selection
    const title = newsletter.querySelector(".popup-title");
    const emailInput = newsletter.querySelector("#email");
    const emailForm = newsletter.querySelector(".newsletter-form");
    const btnClosePopup = newsletter.querySelector(".close-newsletter");
    const btnSignup = newsletter.querySelector(".sign-up");
    const body = newsletter.body;

    const emailList = [];

    // Close Popup
    const closePopup = function () {
      newsletter.classList.add("hidden");
      overlay.classList.add("hidden");
      body.classList.remove("overlay-active");
    };

    overlay.addEventListener("click", closePopup);

    btnClosePopup.addEventListener("click", closePopup);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !newsletter.classList.contains("hidden")) {
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
  };

  init();
};
;const App = (() => {

  const init = () => {
    const body = document.body;
    // const header = document.querySelector('.layout-header');
    // const imageContainer = document.querySelectorAll('.image-container');
    // const carouselSlider = document.querySelector('.carousel-slider');
    const newsletter = document.querySelector('.newsletter');
    const overlay = document.querySelector('.overlay');
    const nav = document.querySelector('.navigation');

    // if(header) {
    //   HeaderHandler(header, document.body);
    // }

    // if(imageContainer.length > 0) {
    //   for(let i = 0; i < imageContainer.length; i++) {
    //     LazyLoad(imageContainer[i]);
    //   }
    // }

    if(newsletter && overlay) {
      NewsletterHandler(newsletter, overlay);
    }

    // if(carouselSlider) {
    //   CarouselSlider(carouselSlider);
    // }
  };

  init();
})();