import "../css/hero-carousel.css";
import "../css/hot-carousel.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";

import $ from "jquery";
import fitty from "fitty";
import "./jquery.js";
import "owl.carousel/dist/owl.carousel.min.js";

$(function () {
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
  });

  // hot-carousel-script
  $(".hot-carousel").load("../components/hot-carousel.html", function () {
    $(".hot-owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      margin: 30,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1200: {
          items: 4,
        },
      },
      navContainer: ".hot-navigate",
      navClass: [
        ["book-prev", "btn", "w-aut", "hot-button"],
        ["book-next", "btn", "w-aut", "hot-button"],
      ],
      navText: [
        `<i class="bi bi-arrow-left"></i>`,
        `<i class="bi bi-arrow-right"></i>`,
      ],
    });
  });
});
