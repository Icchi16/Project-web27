import "../css/hero-carousel.css";
import "../css/hot-carousel.css";

import $ from "jquery";
import fitty from "fitty";

// hero-carousel script
$(".hero-carousel").load("../components/hero-carousel.html", function () {
  fitty(".hero-resize", { maxSize: 128, multiLine: false });

  const target1 = $(".hero-item")[0];
  const target2 = $(".hero-item")[1];
  const target3 = $(".hero-item")[2];
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      fitty(".hero-resize", { maxSize: 128, multiLine: false });
    });
  });

  const config = {
    attributes: true,
    subtree: true,
    childList: true,
    characterData: true,
  };

  observer.observe(target1, config);
  observer.observe(target2, config);
  observer.observe(target3, config);
  // $(".hero-prev, .hero-next").on("click", function (e) {
  //   e.preventDefault();
  //   fitty(".hero-resize", {
  //     maxSize: 128,
  //     multiLine: false,
  //   });
  // });
});

// hot-carousel-script
$(".hot-carousel").load("../components/hot-carousel.html", function () {
  let items = document.querySelectorAll(".carousel .hot-item");

  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
});
