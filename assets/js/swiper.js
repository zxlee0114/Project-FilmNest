// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// test
// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   effect: "fade",
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

//首頁

var indexcard = new Swiper(".indexcard", {
  slidesPerView: 1.2,
  spaceBetween: 24,
  navigation: {
    nextEl: ".indexcard-button-next",
    prevEl: ".indexcard-button-prev",
  },
  pagination: {
    el: ".indexcard-pagination",
  },
  breakpoints: {
    992: {
      slidesPerView: 3.2,
    },
    576: {
      slidesPerView: 2.2,
    },
  },
});

var indexcard = new Swiper(".indexcard2", {
  slidesPerView: 1.2,
  spaceBetween: 24,
  navigation: {
    nextEl: ".indexcard2-button-next",
    prevEl: ".indexcard2-button-prev",
  },
  pagination: {
    el: ".indexcard2-pagination",
  },
  breakpoints: {
    992: {
      slidesPerView: 3.2,
    },
    576: {
      slidesPerView: 2.2,
    },
  },
});

var indexcategory = new Swiper(".indexcategory", {
  slidesPerView: 2,
  spaceBetween: 8,
  grid: {
    fill: "row",
    rows: 4,
  },
  pagination: {
    el: ".indexcategory-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 32,
      grid: {
        fill: "row",
        rows: 2,
      },
    },
  },
});

var sloganswiper = new Swiper(".sloganswiper", {
  slidesPerView: 3,
  spaceBetween: 8,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var indexbannerswiper = new Swiper(".indexbannerswiper", {
  slidesPerView: 1,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  // spaceBetween: 8,
});
