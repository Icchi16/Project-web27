import "../css/header.css";
import $ from "jquery";

$(".header").load("../components/header.html");
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 90) {
    $(".nav").addClass("shrink");
    $(".navbar-brand").children().addClass("logo-shrink");
  } else {
    $(".nav").removeClass("shrink");
    $(".navbar-brand").children().removeClass("logo-shrink");
  }
});
