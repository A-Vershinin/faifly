
(function () {
  /*
    Some description
	*/
  // private varibles;
  let newoObj = {};

  // private functions
  function feedbackSlider() {
    $(".feedback__list").slick({
      dots: false,
      infinite: true,
      adaptiveHeight: true,
      autoplay: false,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.feedback__dots',
      arrows: true,
      pauseOnHover: true,
      prevArrow: ".feedback__arrow--prev",
      nextArrow: ".feedback__arrow--next",
      responsive: [
        {
          breakpoint: 540,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            arrows: true,
          }
        },
      ]
    });

    $('.feedback__dots').slick({
      centerPadding: 0,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: true,
      dots: false,
      arrows: false,
      centerMode: true,
      asNavFor: '.feedback__list',
      focusOnSelect: true,
      // responsive: [
      //   {
      //     breakpoint: 540,
      //     settings: {
      //       arrows: false,
      //     }
      //   }]
    });
  }

  // functions which active in module
  function run() {
    feedbackSlider();
  }

  window.feedbackSlider = {
    init: run,
  };
}());
