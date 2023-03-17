var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var appendNumber = 3;
  var prependNumber = 1;

  var mySwiper = new Swiper('.swiper-container', { initialSlide: 2 });  

// 슬라이드 중간

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

function muCenter(target){
    var snbwrap = $('.snbSwiper .swiper-wrapper');
    var targetPos = target.position();
    var box = $('.snbSwiper');
    var boxHarf = box.width()/2;
    var pos;
    var listWidth=0;
    
    snbwrap.find('.swiper-slide').each(function(){ listWidth += $(this).outerWidth(); })
    
    var selectTargetPos = targetPos.left + target.outerWidth()/2;
    if (selectTargetPos <= boxHarf) { // left
        pos = 0;
    }else if ((listWidth - selectTargetPos) <= boxHarf) { //right
        pos = listWidth-box.width();
    }else {
        pos = selectTargetPos - boxHarf;
    }
    
    setTimeout(function(){snbwrap.css({
        "transform": "translate3d("+ (pos*-1) +"px, 0, 0)",
        "transition-duration": "500ms"
    })}, 200);
}