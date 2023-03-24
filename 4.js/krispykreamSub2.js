
// 나브 이벤트
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






var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3, //레이아웃 뷰 개수
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var appendNumber = 2;
  var prependNumber = 1;
  

  var swiper = new Swiper('.snbSwiper', {
    slidesPerView: 'auto',
    preventClicks: true,
    preventClicksPropagation: false,
    observer: true,
    observeParents: true
});
var $snbSwiperItem = $('.snbSwiper .swiper-wrapper .swiper-slide a');
$snbSwiperItem.click(function(){
    var target = $(this).parent();
    $snbSwiperItem.parent().removeClass('on')
    target.addClass('on');
    muCenter(target);
})

var swiper = new Swiper('.societyGroupTab', {
  slidesPerView: 'auto',
  preventClicks: true,
  preventClicksPropagation: false,
  observer: true,
  observeParents: true,
  nextButton: '.societyGroupTab__next',
  prevButton: '.societyGroupTab__prev'
});
var $lankTitle = $('.societyGroupTab .swiper-slide a');
$lankTitle.click(function(){
  var target = $(this).parent();
  $lankTitle.parent().removeClass('on')
  target.addClass('on');
  muCenter(target);
})
