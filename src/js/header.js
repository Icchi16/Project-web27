import "../css/header.css";
import $ from "jquery";

$(".header").load("../components/header.html");

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
});
