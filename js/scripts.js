const NewsletterHandler = parent => {

  const init = () => {
    const closeButton = parent.querySelector('.close-newsletter');

  };

  init();
};;const App = (() => {

  const init = () => {
    const body = document.body;
    // const header = document.querySelector('.layout-header');
    // const imageContainer = document.querySelectorAll('.image-container');
    // const carouselSlider = document.querySelector('.carousel-slider');
    const newsletter = document.querySelector('.newsletter');

    // if(header) {
    //   HeaderHandler(header, document.body);
    // }

    // if(imageContainer.length > 0) {
    //   for(let i = 0; i < imageContainer.length; i++) {
    //     LazyLoad(imageContainer[i]);
    //   }
    // }

    if(newsletter) {
      NewsletterHandler(newsletter);
    }

    // if(carouselSlider) {
    //   CarouselSlider(carouselSlider);
    // }
  };

  init();
})();