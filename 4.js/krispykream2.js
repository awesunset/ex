var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
});


console.log("click");

window.onload = () => {
  const gnb = document.querySelector(".innerMenu");
  function addOn() {
    // this.classList.add("on");
    gnb.classList.add("on");
    console.log("click");
    // .classList는 IE9이하 버전에서는 작동하지 않는다.
  }
  let removeOn = () => {
    gnb.classList.remove("on");
  };
  const bt = document.querySelector(".bt");
  const btn = document.querySelector(".btn");


  // 2차 메뉴 열기 제이쿼리
  $(".gnb > li > a").unbind("click").click(function () {
    $(this).next().stop(true).slideToggle(300);
    // this 다음 요소를 슬라이드토글
    $(".gnb > li > a").not(this).next().slideUp(300);
    // this가 아니라면 다음 요소는 슬라이드업
    return false;
    // a href="#"을 클릭했을때 목적지가 없어서 리프레시 되는것을 막음
  });

  btn.addEventListener('click', addOn)
  bt.addEventListener('click', removeOn);


};
