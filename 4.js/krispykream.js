var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {     //자동슬라이드 (false-비활성화)
        delay: 2500, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
      },
    });

    // var swiper = new Swiper('.swiper-container', {

    //   slidesPerView: 1, //레이아웃 뷰 개수
      
    //   spaceBetween: 10, //위 slidesPerview 여백
      
       
      
    //   breakpoints: { //반응형 width 
      
    //   640: { //640 이상일 경우
      
    //   slidesPerView: 2,  //레이아웃 2 },
      
    //   768: { slidesPerView: 3, }, 1024: { slidesPerView: 4, }, } }});