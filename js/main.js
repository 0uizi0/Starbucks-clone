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
