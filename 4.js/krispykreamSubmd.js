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


// 머그그
  $.ajax({
    type: "GET",
    url:"/ex/4.js/MD.json",
    dataType: "json",
    success: function(data) {
        var elem = "";
        $.each(data, function() {
            // this는 각 obj를 의미한다.
            elem += `<div class="box">`;
            elem += `<img src='${this.imgfile}' alt='${this.name}'>`;
                elem += `<span>${this.name}</span>`;
                elem += `<p>${this.price}</p>`;
            elem += `</div>`;
        });
        $(".sDonut").append(elem);
    },
    error: function(xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
    }
  });
// 텀블러
  $.ajax({
    type: "GET",
    url:"/ex/4.js/md2.json",
    dataType: "json",
    success: function(data) {
        var elem = "";
        $.each(data, function() {
            // this는 각 obj를 의미한다.
            elem += `<div class="box">`;
            elem += `<img src='${this.imgfile}' alt='${this.name}'>`;
                elem += `<span>${this.name}</span>`;
                elem += `<p>${this.price}</p>`;
            elem += `</div>`;
        });
        $(".sDonut2").append(elem);
    },
    error: function(xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
    }
  });

//   컬렉터블

$.ajax({
    type: "GET",
    url:"/ex/4.js/md3.json",
    dataType: "json",
    success: function(data) {
        var elem = "";
        $.each(data, function() {
            // this는 각 obj를 의미한다.
            elem += `<div class="box">`;
            elem += `<img src='${this.imgfile}' alt='${this.name}'>`;
                elem += `<span>${this.name}</span>`;
                elem += `<p>${this.price}</p>`;
            elem += `</div>`;
        });
        $(".sDonut3").append(elem);
    },
    error: function(xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
    }
  });

  $.ajax({
    type: "GET",
    url:"/ex/4.js/md4.json",
    dataType: "json",
    success: function(data) {
        var elem = "";
        $.each(data, function() {
            // this는 각 obj를 의미한다.
            elem += `<div class="box">`;
            elem += `<img src='${this.imgfile}' alt='${this.name}'>`;
                elem += `<span>${this.name}</span>`;
                elem += `<p>${this.price}</p>`;
            elem += `</div>`;
        });
        $(".sDonut4").append(elem);
    },
    error: function(xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
    }
  });

// 제품교환권
  $.ajax({
    type: "GET",
    url:"/ex/4.js/md5.json",
    dataType: "json",
    success: function(data) {
        var elem = "";
        $.each(data, function() {
            // this는 각 obj를 의미한다.
            elem += `<div class="box">`;
            elem += `<img src='${this.imgfile}' alt='${this.name}'>`;
                elem += `<span>${this.name}</span>`;
                elem += `<p>${this.price}</p>`;
            elem += `</div>`;
        });
        $(".sDonut5").append(elem);
    },
    error: function(xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
    }
  });


  $(document).ready(function () {

    //팝업오픈
    $(".box").on("click", function (event) {  //팝업오픈 버튼 누르면
  
  
  
  
  
    });
    $(".sDonut .box").each(function (index, value) {
      
      $(this).click(function(){
  
        $(".popup-wrap").show();
        $("body").append('<div class="backon"></div>'); //뒷배경 생성
        $.ajax({
          type: "GET",
          url: "/ex/4.js/popup-md.json",
          dataType: "json",
          success: function (data) {         
            console.log(data[index]);
            $(".popup-wrap .pimg").attr('src',`${data[index].imgfile}`),
            $(".cardsec01 h2").html(`${data[index].name}`),
            $(".cardsec01 p").html(`${data[index].infor}`),
            $(".cardsec01 h4").html(`${data[index].price}`)
  
            //나머지채우기
    
    
          },
          error: function (xhr) {
            console.log(xhr.status + "/" + xhr.errorText);
          }
        });
        
      })
  
    });
    $(".sDonut2 .box").each(function (index, value) {
      
      $(this).click(function(){
  
        $(".popup-wrap").show();
        $("body").append('<div class="backon"></div>'); //뒷배경 생성
        $.ajax({
          type: "GET",
          url: "/ex/4.js/popup-md2.json",
          dataType: "json",
          success: function (data) {         
            console.log(data[index]);
            $(".popup-wrap .pimg").attr('src',`${data[index].imgfile}`),
            $(".cardsec01 h2").html(`${data[index].name}`),
            $(".cardsec01 p").html(`${data[index].infor}`),
            $(".cardsec01 h4").html(`${data[index].price}`)
  
            //나머지채우기
    
    
          },
          error: function (xhr) {
            console.log(xhr.status + "/" + xhr.errorText);
          }
        });
        
      })
  
    });
    $(".sDonut3 .box").each(function (index, value) {
      
      $(this).click(function(){
  
        $(".popup-wrap").show();
        $("body").append('<div class="backon"></div>'); //뒷배경 생성
        $.ajax({
          type: "GET",
          url: "/ex/4.js/popup-md3.json",
          dataType: "json",
          success: function (data) {         
            console.log(data[index]);
            $(".popup-wrap .pimg").attr('src',`${data[index].imgfile}`),
            $(".cardsec01 h2").html(`${data[index].name}`),
            $(".cardsec01 p").html(`${data[index].infor}`),
            $(".cardsec01 h4").html(`${data[index].price}`)
  
            //나머지채우기
    
    
          },
          error: function (xhr) {
            console.log(xhr.status + "/" + xhr.errorText);
          }
        });
        
      })
  
    });
    $(".sDonut4 .box").each(function (index, value) {
      
      $(this).click(function(){
  
        $(".popup-wrap").show();
        $("body").append('<div class="backon"></div>'); //뒷배경 생성
        $.ajax({
          type: "GET",
          url: "/ex/4.js/popup-md4.json",
          dataType: "json",
          success: function (data) {         
            console.log(data[index]);
            $(".popup-wrap .pimg").attr('src',`${data[index].imgfile}`),
            $(".cardsec01 h2").html(`${data[index].name}`),
            $(".cardsec01 p").html(`${data[index].infor}`),
            $(".cardsec01 h4").html(`${data[index].price}`)
  
            //나머지채우기
    
    
          },
          error: function (xhr) {
            console.log(xhr.status + "/" + xhr.errorText);
          }
        });
        
      })
  
    });
    $(".sDonut5 .box").each(function (index, value) {
      
      $(this).click(function(){
  
        $(".popup-wrap").show();
        $("body").append('<div class="backon"></div>'); //뒷배경 생성
        $.ajax({
          type: "GET",
          url: "/ex/4.js/popup-md5.json",
          dataType: "json",
          success: function (data) {         
            console.log(data[index]);
            $(".popup-wrap .pimg").attr('src',`${data[index].imgfile}`),
            $(".cardsec01 h2").html(`${data[index].name}`),
            $(".cardsec01 p").html(`${data[index].infor}`),
            $(".cardsec01 h4").html(`${data[index].price}`)
  
            //나머지채우기
    
    
          },
          error: function (xhr) {
            console.log(xhr.status + "/" + xhr.errorText);
          }
        });
        
      })
  
    });

    //배경클릭시 닫기
    $("body").on("click", function (event) {
      if (event.target.className == '.popup-wrap' || event.target.className == 'backon') {
        $(".popup-wrap").hide(); //close버튼 이거나 뒷배경 클릭시 팝업 삭제
        $(".backon").hide();
      }
    });
  });



    // 슬라이드 팝업
$(document).ready(function () {

  //팝업오픈
  $(".img_box").on("click", function (event) {  //박스클릭하면
  });
  $(".swiper-slide").each(function (index, value) {
    
    $(this).click(function(){

      $(".popup-wrap").show();
      $("body").append('<div class="backon"></div>'); //뒷배경 생성
      $.ajax({
        type: "GET",
        url: "/ex/4.js/popup-monthmenu.json",
        dataType: "json",
        success: function (data) {         
          console.log(data[index]);
          $(".popup-wrap .pimg").attr('src',`${data[index].imgfile}`),
          $(".cardsec01 h2").html(`${data[index].name}`),
          $(".cardsec01 p").html(`${data[index].infor}`),
          $(".cardsec01 h4").html(`${data[index].price}`),
          $(".tbl-row-info .p01").html(`${data[index].p01}`),
          $(".tbl-row-info .p02").html(`${data[index].p02}`),
          $(".tbl-row-info .p03").html(`${data[index].p03}`),
          $(".tbl-row-info .p04").html(`${data[index].p04}`),
          $(".tbl-row-info .p05").html(`${data[index].p05}`),
          $(".tbl-row-info .p06").html(`${data[index].p06}`),
          $(".cardsec03 .p07").html(`${data[index].p07}`),
          $(".tbl-row-info .p08").html(`${data[index].p08}`)

          //나머지채우기
  
  
        },
        error: function (xhr) {
          console.log(xhr.status + "/" + xhr.errorText);
        }
      });
    })

  });
});