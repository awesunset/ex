var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
});


$(document).ready(function () {
  let wiw = window.innerWidth;
  //태블릿이하일때(최초로 읽음(고정))

  function checkWindow() {
    if (wiw < 1024) {
      $(".innerMenu").removeClass('on');
      // 1차메뉴
      $(".btn").click(function () {
        $(".submenu").removeClass("on");
        $(".innerMenu").addClass('on');
      }); // 햄버거버튼
      $(".bt").click(function () {
        $(".innerMenu").removeClass('on');
      }); //x버튼

      // 2차메뉴
      $("header, .submenu").removeClass("on");
      $(".gnb > li > a").click(function () {
        $(this).next(".submenu").addClass("on");
        // this 다음 요소를 슬라이드다운
        $(".gnb > li > a").not(this).next(".submenu").removeClass("on");
        // this가 아니라면 다음 요소는 슬라이드업
        return false;
        // a href="#"을 클릭했을때 목적지가 없어서 리프레시 되는것을 막음
      });

    } else {
      $("header, .submenu").removeClass("on");
      //pc일때 gnv호버이벤트
      $(".gnb").mouseenter(function (e) {
        e.stopPropagation();
        $("header").addClass("on");
      });
      $(".gnb").mouseleave(function (e) {
        e.stopPropagation();
        $("header").removeClass("on");
      });
    }
  }

  //창사이즈 체크
  //태블릿이하로 창이 줄어들면(최초로 읽는것이 아니고 창이 조정되면 읽음(실시간))
  $(window).resize(function () {
    wiw = window.innerWidth;
    checkWindow();
  });

  checkWindow();
});