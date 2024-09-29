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

// project-intro
// 劇照 swiper
// 下方小圖 Swiper
const projectIntroSwiper = new Swiper(".projectIntroSwiper", {
  spaceBetween: 24,
  slidesPerView: 3,
  navigation: {
    nextEl: ".projectIntroSwiper-button-next",
    prevEl: ".projectIntroSwiper-button-prev",
  },
});
// 上方所展示的大張圖片的swiper
const projectIntroSwiper2 = new Swiper(".projectIntroSwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: projectIntroSwiper,
  },
});

// project-intro-nav 手機版
const projectIntroNavSwiper = new Swiper(".project-intro-nav-swiper", {
  slidesPerView: 4.1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  freeMode: true,

  breakpoint: {
    992: {
      slidesPerView: 6,
      slidesPerGroup: 1,
      spaceBetween: 32,
    },
  },
});

//贊助方案 swiper
const feedbackChoiceSwiper = new Swiper(".feedbackChoiceSwiper",{
  slidesPerView: 1.2,
  spaceBetween: 12,
  
  breakpoints:{
    768:{
      slidesPerView: 2.5,
      spaceBetween: 14,
    },
    992:{
      slidesPerView: 4,
      spaceBetween: 16,
      navigation: {
        el: ".swiper-pagination",
        type: "bullets",
        bulletActiveClass: "swiper-pagination-bullet-active",
        clickable: true,

        nextEl: ".feedbackChoiceSwiper-button-next",
        prevEl: ".feedbackChoiceSwiper-button-prev",
      },
    }
  }
});