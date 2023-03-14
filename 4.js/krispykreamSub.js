var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    breakpoints: { //반응형 width 
      330: { //640 이상일 경우
      
        slidesPerView: 1,},


      640: { //640 이상일 경우
      
      slidesPerView: 2,},
      
      768: { slidesPerView: 3, }, 1024: { slidesPerView: 4, }, }
  });