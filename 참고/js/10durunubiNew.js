// 10durunubiNew

var swiperB = new Swiper(".banner", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
});



// 길종류검색 탭구조
let roadSearchButtons = document.querySelectorAll('#roadSearch > button');
Array.from(roadSearchButtons).forEach((eachButton, index) => {
	eachButton.addEventListener('click', function () {
		let tabBoxs = document.querySelectorAll('#roadResult > div');
		for (var i = 0; i < tabBoxs.length; i++) {
			tabBoxs[i].classList.remove("on");
			roadSearchButtons[i].classList.remove("on");
		}
		tabBoxs[index].classList.add("on");
		this.classList.add("on");
	});
});
roadSearchButtons[0].click();

// 해파랑/남파랑/서해랑길 탭구조
let roadButtons = document.querySelectorAll('#roadButtons > h2');
Array.from(roadButtons).forEach((eachButton, index) => {
	eachButton.addEventListener('click', function () {
		let roadLists = document.querySelectorAll('#roadList > div');
		let tabLinks = document.querySelectorAll('#roadButtons > a');
		for (var i = 0; i < roadLists.length; i++) {
			roadLists[i].classList.remove("on");
			roadButtons[i].classList.remove("on");
			tabLinks[i].classList.remove("on");
		}
		roadLists[index].classList.add("on");
		tabLinks[index].classList.add("on");
		this.classList.add("on");
	});
});
roadButtons[0].click();