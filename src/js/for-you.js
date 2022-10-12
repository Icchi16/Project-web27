import $ from "jquery";

$(function () {
  $(".list-group li").on("click", function (e) {
    e.preventDefault();
    $(this).parent().find("li").removeClass("active");
    $(this).addClass("active");
  });
});
