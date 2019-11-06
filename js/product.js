$(function(){
    // 5使用插件
    // 轮播
    $("#aa13").tyslide({
        boxh:400,//盒子的高度
        w:1000,//盒子的宽度
        h:400,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d8d8d8",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNumber:true
    });
    // end 轮播
    $(".discount ul li,.newBook ul li").click(function(){
        location.href = "./productInfo.html"
    })
})