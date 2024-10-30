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

// project-intro
// 劇照 swiper
// 下方小圖 Swiper
const projectIntroSwiper = new Swiper(".projectIntroSwiper", {
  spaceBetween: 24,
  slidesPerView: 3,
});
// 上方所展示的大張圖片的swiper
const projectIntroSwiper2 = new Swiper(".projectIntroSwiper2", {
  spaceBetween: 24,
  slidesPerView: 1,
  navigation: {
    nextEl: ".projectIntroSwiper-button-next",
    prevEl: ".projectIntroSwiper-button-prev",
  },
  thumbs: {
    swiper: projectIntroSwiper,
  },
});

// project-intro-nav 手機版
const projectIntroNavSwiper = new Swiper(".project-intro-nav-swiper", {
  slidesPerView: 4.2,
  slidesPerGroup: 1,
  spaceBetween: 15,
  loop: false,

  breakpoints: {
    992: {
      slidesPerView: 6,
      slidesPerGroup: 1,
      spaceBetween: 32,
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
  loop:true,
  autoplay:true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  // spaceBetween: 8,
});

//贊助方案 swiper
const feedbackChoiceSwiper = new Swiper(".feedbackChoiceSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 12,
  //分頁器
  pagination: {
    el: ".swiper-pagination",
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active",
    clickable: true,
  },
  navigation: {
    nextEl: ".feedbackChoiceSwiper-button-next",
    prevEl: ".feedbackChoiceSwiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 14,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});
