// import css
import "../css/hero-carousel.css";
import "../css/hot-carousel.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";

// import function
import $ from "jquery";
import fitty from "fitty";
import _ from "lodash";

import { toEvent } from "./utils";

// import script
import "./jquery.js";
import "owl.carousel/dist/owl.carousel.min.js";

// import database
import { eventsDb } from "./db";

// script
// func render Hero
export const renderHero = () => {
  const $heroEvents = $(".hero-inner");
  const heroTemplate = $("#hero-template").html();
  const hero = _.template(heroTemplate);
  const startHeroEvent = Math.random() * (eventsDb.length - 2);
  const heroEvents = eventsDb.slice(startHeroEvent, startHeroEvent + 3);

  _.forEach(heroEvents, function (p) {
    const defaultShowtime = p[`showtime`];

    const formatedShowtime = _.map(defaultShowtime, function (p) {
      const stringShowtime = p.split("-");
      const convertedShowtime = new Date(
        stringShowtime[2],
        stringShowtime[1],
        stringShowtime[0]
      );

      const date = convertedShowtime.getDate().toString().padStart(2, "0");
      const month = convertedShowtime.getMonth().toString().padStart(2, "0");
      const heroShowtime = `${date}/${month}`;
      // p = `${date}/${month}`;
      return heroShowtime;
    });
    return (p[`showtime`] = formatedShowtime);
  });

  $heroEvents.html("");
  $heroEvents.append(
    _.map(heroEvents, (p) => {
      const dom = $(hero(p));
      return dom;
    })
  );
};

// func resize Hero Title
export const resizeTitle = () => {
  fitty(".hero-resize", { maxSize: 128, multiLine: false });

  const target1 = $(".hero-item")[0];
  const target2 = $(".hero-item")[1];
  const target3 = $(".hero-item")[2];
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function () {
      fitty(".hero-resize", { maxSize: 128, multiLine: false });
    });
  });

  const config = {
    attributes: true,
    subtree: true,
    childList: true,
    characterData: true,
  };

  observer.observe(target1, config);
  observer.observe(target2, config);
  observer.observe(target3, config);
};

// import Hero html
$(function () {
  // hero-carousel script

  $(".hero-carousel").load("../components/hero-carousel.html", function () {
    //  render Hero
    renderHero();
    $(".hero-item").filter(":first-child").addClass("active");

    //  resize Title
    resizeTitle();
  });

  // hot-carousel-script
  $(".hot-carousel").load("../components/hot-carousel.html", function () {
    $(".hot-owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      margin: 30,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1200: {
          items: 4,
        },
      },
      navContainer: ".hot-navigate",
      navClass: [
        ["book-prev", "btn", "w-aut", "hot-button"],
        ["book-next", "btn", "w-aut", "hot-button"],
      ],
      navText: [
        `<i class="bi bi-arrow-left"></i>`,
        `<i class="bi bi-arrow-right"></i>`,
      ],
    });
  });
});
