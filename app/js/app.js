
document.addEventListener("DOMContentLoaded", function() {
  (function() {
    // check js
    isJsAndTouchSupported.init();

    // ckeck svg local
    svg4everybody();

    // toggle menu
    menu.toggle();

    // hero slaider
    headerSlider.init();

    // feedback sliider
    feedbackSlider.init();

    chart.init();
  })();
});
