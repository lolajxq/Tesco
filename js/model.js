$(function(){
    // 1.窗口滚动到200px时出现隐藏搜索框和左边隐藏栏
    $(".fixedTop").hide();
    $(window).scroll(function(){
        var scrollTop = $("html").scrollTop();
        if(scrollTop >= 200){
            $(".fixedTop,.fixedLeft").fadeIn(1000);
        }
        else{
            $(".fixedTop,.fixedLeft").fadeOut(1000);
            if(scrollTop == 0){
                $(".fixedLeft li ~div").removeClass("bgColor").animate({"width":0},0);
            }
        }
    })
    // 2.鼠标移动到左侧隐藏栏显示隐藏菜单
    $(".fixedLeft li div:first-child").hover(function(){
        $(this).find("~div").animate({"width":"80px"},100);
        $(this).find("~div").removeClass("bgColor");
        $(this).find("~div p").addClass("active");
    },function(){
        $(this).find("~div").animate({"width":"40px"},0);
        $(this).find("~div").addClass("bgColor");
        $(this).find("~div p").removeClass("active");

    })
    // 3.鼠标移动到右侧隐藏栏领券中心显示二维码
    var flag = true;
    $(".fixedRight .img2,.fixedRight .img3").hover(function(){
        $(".fixedRight .img3").stop(true,false);
        $(".fixedRight .img3").animate({"right":"39px"});
    },function(){
        $(".fixedRight .img3").stop(true,false);
        $(".fixedRight .img3,.fixedRight .img3").animate({"right":"-200px"});
    })
})