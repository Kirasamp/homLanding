const App = (() => {

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