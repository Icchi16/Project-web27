// import css
import "../css/calendar.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";

// import dependencies
import $ from "jquery";
import "owl.carousel/dist/owl.carousel.min.js";

// import components
import "./header.js";
import "./footer.js";

$(function () {
  $(".date-carousel").owlCarousel({
    nav: true,
    autoWidth: true,
    dots: false,
    singleItem: true,
    navContainer: ".date-theme",
    navClass: [
      ["date-nav", "date-prev"],
      ["date-nav", "date-next"],
    ],
    navText: [
      `<i class="bi bi-arrow-left"></i>`,
      `<i class="bi bi-arrow-right"></i>`,
    ],
  });
});

$(function () {
  $(".owl-item").hover(
    function (e) {
      e.preventDefault();

      $(this).parent().find(".active").addClass("selecting");

      $(this).find(".date-link").addClass("hover");
    },
    function (e) {
      e.preventDefault();
      $(this).parent().find(".date-link").removeClass("hover");
      $(this).parent().find(".active").removeClass("selecting");
    }
  );
  // .then(function () {
  //   $(this).parent().find(".active").removeClass("selecting");
  // });

  $(".owl-item").on("click", function (e) {
    e.preventDefault();
    $(this).parent().find(".date-link").removeClass("active");
    $(this).find(".date-link").addClass("active");
  });
});

$(function () {
  $(".list-group li").on("click", function (e) {
    e.preventDefault();
    $(this).parent().find("li").removeClass("active");
    $(this).addClass("active");
  });
});

// get-card-height

let w = ($(".calendar").width() - 8) / 7;
let h = w / (516 / 780);

const cardHeight = () => {
  $("td").height(h);
};

$(function () {
  cardHeight();
});

$(window).resize(function () {
  w = ($(".calendar").width() - 8) / 7;
  h = w / (516 / 780);
  cardHeight();
});
