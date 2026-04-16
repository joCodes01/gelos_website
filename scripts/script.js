// new Glide(".glide", {
//   type: "carousel",
//   startAt: 0,
//   perView: 1,
// }).mount();

new Glide(".glide").mount();

new Accordion(".accordion-container");

document.getElementById("current-year").innerText = new Date().getFullYear();

//banner
const heroScroll = document.querySelector(".hero__scroll");
const introduction = document.getElementById("introduction");

heroScroll.addEventListener("click", () =>
  introduction.scrollIntoView({ behavior: "smooth", block: "start" }),
);
