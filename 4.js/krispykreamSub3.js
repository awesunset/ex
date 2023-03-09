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
