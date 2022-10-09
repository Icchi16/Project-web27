import "../css/global.css";
import "../css/hero-carousel.css";
import "../css/hot-carousel.css";

import $ from "jquery";
$(".hero-carousel").load("../components/hero-carousel.html");
$(".hot-carousel").load("../components/hot-carousel.html", function () {
  $(".hot-slider").slick();
});
