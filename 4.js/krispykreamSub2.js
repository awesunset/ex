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
