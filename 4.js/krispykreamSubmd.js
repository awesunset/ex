var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,
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

      slidesPerView: 1,
    },


    640: { //640 이상일 경우

      slidesPerView: 2,
    },

    768: { slidesPerView: 3, }, 1024: { slidesPerView: 4, },
  }
});


$(document).ready(function () {
  //MD정보불러오기
  $.ajax({
    type: "GET",
    url: "/ex/4.js/MD.json",
    dataType: "json",
    success: function (data) {
      var elem = "";
      $.each(data, function () {
        elem += `<div class="box">`;
        elem += `<img src='${this.imgfile}' alt='${this.name}'>`;
        elem += `<span>${this.name}</span>`;
        elem += `<p>${this.price}</p>`;
        elem += `</div>`;
      });
      $(".sDonut").append(elem);
    },
    error: function (xhr) {
      console.log(xhr.status + "/" + xhr.errorText);
    }
  });
  //MD2정보불러오기
  $.ajax({
    type: "GET",
    url: "/ex/4.js/md2.json",
    dataType: "json",
    success: function (data) {
      var elem = "";
      $.each(data, function () {
        elem += `<div class="box">`;
        elem += `<img src='${this.imgfile}' alt='${this.name}'>`;
        elem += `<span>${this.name}</span>`;
        elem += `<p>${this.price}</p>`;
        elem += `</div>`;
      });
      $(".sDonut2").append(elem);
    },
    error: function (xhr) {
      console.log(xhr.status + "/" + xhr.errorText);
    }
  });
    //MD3정보불러오기
    $.ajax({
      type: "GET",
      url: "/ex/4.js/md3.json",
      dataType: "json",
      success: function (data) {
        var elem = "";
        $.each(data, function () {
          elem += `<div class="box">`;
          elem += `<img src='${this.imgfile}' alt='${this.name}'>`;
          elem += `<span>${this.name}</span>`;
          elem += `<p>${this.price}</p>`;
          elem += `</div>`;
        });
        $(".sDonut3").append(elem);
      },
      error: function (xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
      }
    });
        //MD4정보불러오기
        $.ajax({
          type: "GET",
          url: "/ex/4.js/md4.json",
          dataType: "json",
          success: function (data) {
            var elem = "";
            $.each(data, function () {
              elem += `<div class="box">`;
              elem += `<img src='${this.imgfile}' alt='${this.name}'>`;
              elem += `<span>${this.name}</span>`;
              elem += `<p>${this.price}</p>`;
              elem += `</div>`;
            });
            $(".sDonut4").append(elem);
          },
          error: function (xhr) {
            console.log(xhr.status + "/" + xhr.errorText);
          }
        });
            //MD5정보불러오기
    $.ajax({
      type: "GET",
      url: "/ex/4.js/md5.json",
      dataType: "json",
      success: function (data) {
        var elem = "";
        $.each(data, function () {
          elem += `<div class="box">`;
          elem += `<img src='${this.imgfile}' alt='${this.name}'>`;
          elem += `<span>${this.name}</span>`;
          elem += `<p>${this.price}</p>`;
          elem += `</div>`;
        });
        $(".sDonut5").append(elem);
      },
      error: function (xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
      }
    });

  //md클릭시 상세팝업오픈
  $(document).on("click", ".sDonut > .box", function () {
    $(".bottom > button, .cardsec02, .cardsec03").hide();
    $(".backon, .popup-wrap").show();
    let index = $(this).index();
    console.log(index);
    $.ajax({
      type: "GET",
      url: "/ex/4.js/popup-MD.json",
      dataType: "json",
      success: function (data) {
        $(".popup-wrap .pimg").attr('src', `${data[index].imgfile}`),
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
          $(".tbl-row-info .p08").html(`${data[index].p08}`);

      },
      error: function (xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
      }
    });
  });
   //md2클릭시 상세팝업오픈
   $(document).on("click", ".sDonut2 > .box", function () {
    $(".backon, .popup-wrap").show();
    let index = $(this).index();
    console.log(index);
    $.ajax({
      type: "GET",
      url: "/ex/4.js/popup-md2.json",
      dataType: "json",
      success: function (data) {
        $(".popup-wrap .pimg").attr('src', `${data[index].imgfile}`),
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
          $(".tbl-row-info .p08").html(`${data[index].p08}`);

      },
      error: function (xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
      }
    });
  });
  //md3클릭시 상세팝업오픈
  $(document).on("click", ".sDonut3 > .box", function () {
    $(".backon, .popup-wrap").show();
    let index = $(this).index();
    console.log(index);
    $.ajax({
      type: "GET",
      url: "/ex/4.js/popup-md3.json",
      dataType: "json",
      success: function (data) {
        $(".popup-wrap .pimg").attr('src', `${data[index].imgfile}`),
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
          $(".tbl-row-info .p08").html(`${data[index].p08}`);

      },
      error: function (xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
      }
    });
  });
   //md4클릭시 상세팝업오픈
   $(document).on("click", ".sDonut4 > .box", function () {
    $(".backon, .popup-wrap").show();
    let index = $(this).index();
    console.log(index);
    $.ajax({
      type: "GET",
      url: "/ex/4.js/popup-md4.json",
      dataType: "json",
      success: function (data) {
        $(".popup-wrap .pimg").attr('src', `${data[index].imgfile}`),
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
          $(".tbl-row-info .p08").html(`${data[index].p08}`);

      },
      error: function (xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
      }
    });
  });
     //md5클릭시 상세팝업오픈
     $(document).on("click", ".sDonut5 > .box", function () {
      $(".backon, .popup-wrap").show();
      let index = $(this).index();
      console.log(index);
      $.ajax({
        type: "GET",
        url: "/ex/4.js/popup-md5.json",
        dataType: "json",
        success: function (data) {
          $(".popup-wrap .pimg").attr('src', `${data[index].imgfile}`),
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
            $(".tbl-row-info .p08").html(`${data[index].p08}`);
  
        },
        error: function (xhr) {
          console.log(xhr.status + "/" + xhr.errorText);
        }
      });
    });
  

  //배경클릭시 닫기
  $("body").on("click", function (event) {
    if (event.target.className == '.popup-wrap' || event.target.className == 'backon') {
      $(".popup-wrap").hide(); //close버튼 이거나 뒷배경 클릭시 팝업 삭제
      $(".backon").hide();
    }
  });

  //상세팝업의 상세정보버튼 클릭시 세부내용 슬라이드토글
  $(".popbt").on("click", function (event) {  //팝업오픈 버튼 누르면
    $(".cardsec02").slideToggle(300);

    $("body").on("click", function (event) {
      if (event.target.className == '.popbt') {
        $(".cardsec02").click(); //close버튼 이거나 뒷배경 클릭시 팝업 삭제
      }
    });
  });

  // 슬라이드 팝업오픈
  $(document).on("click", ".swiper-slide", function () {
    $(".bottom > button, .cardsec02, .cardsec03").show();
    $(".backon, .popup-wrap").show();
    $(".cardsec02").stop().hide();
    let index = $(this).index();
    console.log(index);
    $.ajax({
      type: "GET",
      url: "/ex/4.js/popup-monthmenu.json",
      dataType: "json",
      success: function (data) {
        $(".popup-wrap .pimg").attr('src', `${data[index].imgfile}`),
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
          $(".tbl-row-info .p08").html(`${data[index].p08}`);
      },
      error: function (xhr) {
        console.log(xhr.status + "/" + xhr.errorText);
      }
    });
  });
});


  
  
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