"use strict";

(function () {

  /*
    Есть массив чисел: [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13]
    Вывести его в виде графика (bar charts), где по оси x - индекс элемента, по оси y - значение.
    Сделать цветовую градацию показателей на графике: 0 - 5 зеленый, 6 - 10 желтый, свыше
    10 красный. Допускается использование только html, css, javascript. Использование
    сторонних библиотек, canvas, svg не допускается.
	*/

  const arr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];

  const barBox = $(".chart__bar-box");
  const green = "bar-green";
  const yellow = "bar-yellow";
  const red = "bar-red";
  const barNumber = "bar-10";

  // private functions
  function someFunc() {
    arr.forEach(function (elem) {
      let height = `bar-${elem*10}`;
      let bar = $("<div></div>").addClass("chart__bar").addClass(height);
      (elem >= 0 && elem <= 5) ? bar.addClass(green): null;
      (elem >= 6 && elem <= 10) ? bar.addClass(yellow): null;
      (elem >= 10) ? bar.addClass(red): null;
      barBox.append(bar);
    });
  }

  // functions which active in module
  function run() {
    someFunc();
  }

  window.chart = {
    init: run
  };
}());
