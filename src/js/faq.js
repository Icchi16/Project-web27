import $ from "jquery";

$(function () {
  $(".accordion-button").on("click", function (e) {
    e.preventDefault();

    if ($(this).find(".plus").hasClass("minus")) {
      $(this).find(".plus").toggleClass("minus");
    } else {
      $(this).closest(".accordion").find(".plus").removeClass("minus");
      $(this).find(".plus").addClass("minus");
    }
  });
});
