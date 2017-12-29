
(function () {
  /*
    Some description
	*/
  // private varibles;
  let newoObj = {};

  // private functions
  function headerSlider() {
    const carousel = $(".hero__slider").owlCarousel({
      items: 1,
      loop: true,
      center: true,
      margin: 0,
      nav: true,
      navigation: true,
      dots: true,
      autoplay: true,
      autoHeight: true,
      autoplayHoverPause: true,
      autoplaySpeed: 1500,
      autoplayTimeout: 5000,
      navSpeed: 1500,
      smartSpeed: 1500,
      fluidSpeed: 1500,
      lazyLoad: true,
      navigationText: ["", ""],
      responsiveClass: true,
      navContainerClass: "",
      navText: "",
      dotsClass: "hero__dots",
      dotClass: "hero__dots-link",
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: true,
        },
        576: {
          nav: false,
          dotsEach: true,
        },
        768: {
          nav: false,
        },
        992: {
          nav: false,
        }
      },
    });
  }

  // functions which active in module
  function run() {
    headerSlider();
  }

  window.headerSlider = {
    // public method export init
    init: run,
  };
}());
