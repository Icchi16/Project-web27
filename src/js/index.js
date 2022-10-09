import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";

import $ from "jquery";
import "jquery/dist/jquery.min.js";
import "slick-carousel/slick/slick.min.js";
import "./nav.js";

$(".autoplay").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
