"use strict";

(function () {
  /*
    Toggle class in menu
	*/
  let menuHam = $(".menu__hamburger");
  let menuCollapse = $(".menu__collaps");

  function setToggleMenu() {
    menuHam.on("click", function () {
      menuHam.toggleClass("is-active");
    });
    $(window).resize(function() {
      menuHam.removeClass("is-active");
      menuCollapse.removeClass("show");
    });
  }

  function run() {
    setToggleMenu();
  }

  window.menu = {
    toggle: run
  };
}());
