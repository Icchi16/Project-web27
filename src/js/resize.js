import $ from "jquery";

$(document).ready(function () {
  resize();
});

var rtime;
var timeout = false;
var delta = 100;
$(window).resize(function () {
  rtime = new Date();
  if (timeout === false) {
    timeout = true;
    setTimeout(resizeend, delta);
  }
});

function resizeend() {
  if (new Date() - rtime < delta) {
    setTimeout(resizeend, delta);
  } else {
    timeout = false;
    resize();
    // console.log('Done resizing');
  }
}

function resize() {
  $(".resize").each(function (i, obj) {
    $(this).css("font-size", "8em");

    while ($(this).width() > $(this).parent().width()) {
      $(this).css("font-size", parseInt($(this).css("font-size")) - 1 + "px");
    }
  });
}
