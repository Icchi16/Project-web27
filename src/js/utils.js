import $ from "jquery";

export const toEvent = (e) => {
  const currentUrl = new URL(window.Location.href);
  const parsedEventId = $(e).closest(".hero-item").attr("id");
  const parsedEventUrl = new URL(
    `../event.html?eventid=${parsedEventId}`,
    currentUrl
  );
  return parsedEventUrl;
};
