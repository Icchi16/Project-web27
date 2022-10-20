// import css
import "../css/book.css";
import "../css/hero-carousel.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";

// import dependencies
import $ from "jquery";
import "./jquery.js";
import "owl.carousel/dist/owl.carousel.min.js";

// import components
import "./header.js";
import "./footer.js";
import "./faq.js";

$(function () {
  $(".book-date-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
    navContainer: ".book-theme",
    navClass: [
      ["book-nav", "book-prev"],
      ["book-nav", "book-next"],
    ],
    navText: [
      `<i class="bi bi-arrow-left"></i>`,
      `<i class="bi bi-arrow-right"></i>`,
    ],
  });

  $(".active").last().addClass("border-fix");
  $(".book-prev, .book-next").on("click", function () {
    setTimeout($(".owl-item").removeClass("border-fix"), 100);
    setTimeout($(".active").last().addClass("border-fix"), 100);
  });
});
