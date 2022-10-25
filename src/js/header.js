// import css
import "../css/header.css";

// import funciton
import $ from "jquery";

// import database

// script

$(".header").load("../components/header.html", function () {
  const onScroll = () => {
    if ($(window).scrollTop() > 90) {
      $(".nav").addClass("shrink");
      $(".navbar-brand").children().addClass("logo-shrink");
    } else {
      $(".nav").removeClass("shrink");
      $(".navbar-brand").children().removeClass("logo-shrink");
    }
  };

  $(function () {
    $(window).on("scroll", onScroll);
    $(document.body).on("touchmove", onScroll);

    $(".ham-toggler").on("click", function () {
      $(".nav").toggleClass("shrink-mobile");
    });
  });

  // render header
});
