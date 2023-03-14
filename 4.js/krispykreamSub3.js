$(".frm").submit(function() {
    // id칸의 공란여부 체크
    if (!$(".num").val()) {
        // 빈칸이면
        $(".mg1").css("display", "block");
        $(".mg1").focus();
        // 경고문 출력후 입력포커스 이동
        return false;}

    // pw칸의 공란여부 체크
    if (!$(".stday").val()) {
        // 빈칸이면
        $(".mg2").css("display", "block");
        $(".mg2").focus();
        // 경고문 출력후 입력포커스 이동
        return false;
    }

    if (!$(".time").val()) {
        // 빈칸이면
        $(".mg3").css("display", "block");
        $(".mg3").focus();
        // 경고문 출력후 입력포커스 이동
        return false;
    }

});

// 코멘트 글자수제한

$(document).ready(function() {
    $('#comment').on('keyup', function() {
        $('#comment_cnt').html("("+$(this).val().length+" / 300)");
 
        if($(this).val().length > 300) {
            $(this).val($(this).val().substring(0, 300));
            $('#comment_cnt').html("(300 / 300)");
        }
    });
});

// 코멘트 글자수 제한 알림

$('#comment').keyup(function (e) {
	let content = $(this).val();
    if (content.length > 300) {
    	// 200자 부터는 타이핑 되지 않도록
        $(this).val($(this).val().substring(0, 300));
        // 200자 넘으면 알림창 뜨도록
        alert('글자수는 300자까지 입력 가능합니다.');
    };
});