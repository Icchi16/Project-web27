// import css
import "../css/hero-carousel.css";
import "../css/hot-carousel.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";

// import function
import $ from "jquery";
import fitty from "fitty";
import _, { filter } from "lodash";

// import { toEvent } from "./utils";

// import script
import "./jquery.js";
import "owl.carousel/dist/owl.carousel.min.js";

// import database
import { eventsDb } from "./db";

// script
// func render Hero

export const formatedEventsDB = eventsDb
  .map((p) => {
    return Object.assign({}, p);
  })
  .map((p) => {
    p.showtime = [
      ..._.map(p.showtime, (d) => {
        return Date.parse(d);
      }),
    ];
    return p;
  });

export const renderHero = () => {
  const $heroEvents = $(".hero-inner");
  const heroTemplate = $("#hero-template").html();
  const hero = _.template(heroTemplate);
  const startHeroEvent = Math.random() * (formatedEventsDB.length - 2);
  let heroEvents = formatedEventsDB.slice(startHeroEvent, startHeroEvent + 3);

  heroEvents = heroEvents
    .map((p) => {
      return Object.assign({}, p);
    })
    .map((p) => {
      p.showtime = [
        ..._.map(p.showtime, (d) => {
          const heroFormatedDate = new Date(d);
          const date = heroFormatedDate.getDate().toString().padStart(2, "0");
          const month = (heroFormatedDate.getMonth() + 1)
            .toString()
            .padStart(2, "0");
          return `${date} / ${month}`;
        }),
      ];
      return p;
    });

  $heroEvents.html("");
  $heroEvents.append(
    _.map(heroEvents, (p) => {
      const dom = $(hero(p));

      const eventID = p[`id`];
      const parsedEventUrl = new URL(
        `../event.html?eventid=${eventID}`,
        window.location.href
      );

      dom.find(".btn").parent().attr("href", parsedEventUrl);
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

  // hot-carousel-function
  async function renderHot() {
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

    const result = await filterHot();
    return result;
  }

  const filterHot = () => {
    const today = new Date();

    const eventDbShowtime = _.map(formatedEventsDB, ({ showtime }) => {
      // return showtime;
      _.map(showtime, (p) => {});
    });
  };
  //
  //
  // hot-carousel-script
  $(".hot-carousel").load("../components/hot-carousel.html", function () {
    filterHot();

    renderHot();
  });
});
