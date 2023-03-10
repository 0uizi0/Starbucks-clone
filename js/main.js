// MAIN HEADER
// SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchIconEl = searchEl.querySelector("span");

/**
 * 깔끔한 코드
 */
let isFocused = false;

searchIconEl.addEventListener("click", function () {
  if (isFocused) {
    searchInputEl.blur();
    isFocused = false;
  } else {
    searchInputEl.focus();
    isFocused = true;
  }
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

/** 내 코드
 * 1번째 시도 : width 값을 부여 => 36px인지 아닌지로 ==> 잘못된 코드.
 * focus시 클래스 부여, click & blur시 클래스를 잃어버리게
 */

// SWIPER
// SWIPER NOTICE
const swiperNotice = new Swiper(
  ".notice .notice-line .inner .inner__left .swiper",
  {
    direction: "vertical",
    loop: true,
    autoplay: true,
  }
);
// SWIPER PROMOTION
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal", //defalt값
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

// AutoPlay 컨트롤
function controlAutoPlay() {
  // console.log(swiperPromotion);
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start();
  } else {
    swiperPromotion.autoplay.stop();
  }
}

// Toggle Promotion
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
});

// 애니메이션 파트
// Visual
window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

// 애니메이션 스크롤 파트
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    // elsavador
    const elsavadorSection = this.document.querySelector(".elsalvador");
    elsavadorSection.classList.add("animate");
  }
  if (window.scrollY > 680) {
    // ethiopia
    const ethiopiaSection = this.document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }
  if (window.scrollY > 1100) {
    // favorite
    const favoriteSection = this.document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }
  if (window.scrollY > 1900) {
    // magazine
    const magazineSection = this.document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }
  if (window.scrollY > 2230) {
    // store
    const storeSection = this.document.querySelector(".store");
    storeSection.classList.add("animate");
  }
});
