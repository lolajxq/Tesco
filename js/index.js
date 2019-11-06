$(function(){
       // 使用插件
        // 轮播
        $("#aa").tyslide({
            boxh:216,//盒子的高度
            w:330,//盒子的宽度
            h:216,//图片的高度
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

        $("#bb,#cc").tyslide({
            boxh:340,//盒子的高度
            w:383,//盒子的宽度
            h:340,//图片的高度
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


    /***********************新书畅销榜*******************************/ 
    $(".book .right li,.newBook .right li").mouseover(function(){
        // li高,序号的行高设为150
        $(this).css("height",150);
        $(this).find("p:first-child").css("line-height","150px");
        // 兄弟li高,兄弟序号行高设为41
        $(this).siblings().css("height",41);
        $(this).siblings().find("p:first-child").css("line-height","41px");
        // 隐藏第二个p标签（图书名）,将图书信息（div）设为可见
        $(this).find("p:nth-child(2)").hide();
        $(this).find("div").show();
        // 展示兄弟第二个p标签（图书名）,将图书信息（div）设为隐藏
        $(this).siblings().find("p:nth-child(2)").show();
        $(this).siblings().find("div").hide();
        console.log($(".book .right li:first-child,.book .right li:first-child").css("height"));
        // 展示图书文字
        $(this).find("div p").show();
    })
    /***********************end 新书畅销榜*******************************/ 



    // 鼠标移到分类菜单显示子菜单并加上当前菜单的边框
    $(".banner .classify1,.banner .classify2").hover(function(){
        // 鼠标移到分类菜单显示子菜单
        $(".banner .classify2").removeClass("active");
        $(this).parent().find(".classify2").addClass("active");
        // 加上当前菜单的边框
        $(this).parent().find(".classify1").siblings().removeClass("addBorder");
        $(this).parent().find(".classify1").addClass("addBorder");
        // 给兄弟加右边框
        $(this).parent().siblings().find(".classify1").addClass("boderRight");

    },function(){
        // 鼠标移出分类菜单隐藏子菜单
        $(this).parent().find(".classify2").removeClass("active");
        // 去掉当前菜单的边框
        $(this).parent().find(".classify1").removeClass("addBorder");
        // 去掉兄弟加右边框
        $(this).parent().siblings().find(".classify1").removeClass("boderRight");
    })
    /***********************轮播*******************************/ 
    // 定义定时器
    var timer = setInterval(slideshow,30);
    var index = 0;
    // 定义轮播
    function slideshow(){
        $(".btn ul li").removeClass("changeBg");
        $(`.btn ul li`).eq(index).addClass("changeBg");
        // 获取当前图片的left
      
        var $offLeft = $(".slideshow").position().left;
        // 设置速度
        var speed = -10;
        // 判断是否到达指定位置
        if($offLeft==index*(-1000)){
            // 清除计时器
            clearInterval(timer);
            // 暂停图片
            var timer2 = setTimeout(function(){
                clearInterval(timer);
                timer=setInterval(slideshow,30);
                index==5 ? index=0:index++;

            },1000);
        }
      
        if($offLeft == -5000){
            $(".slideshow").css({"left":0});
        }
        else{
            $(".slideshow").css("left",$offLeft+speed);
        }
    }
    // 轮播指定查看图片
    $(".btn ul li").click(function(){
        clearInterval(timer);
        $(".btn ul li").removeClass("changeBg");
        $(this).addClass("changeBg");
        var i =parseInt($(this).text())-1;
        $(".slideshow").animate({"left":i*(-1000)},100);
        index = i;
        var timer2 = setTimeout(() => {
            clearInterval(timer);
            timer=setInterval(slideshow,30);
        }, 1000);
    })
    // 鼠标移动到轮播图，前后按钮完全显示出来
      $(".right").hover(function(){
        $(".right .btn1,.right .btn2").css("opacity","1")
    },function(){
        $(".right .btn1,.right .btn2").css("opacity","0.5")
    })
    // 点击前后按钮切换轮播图片
    $(".right .btn1,.right .btn2").click(function(){
        clearInterval(timer);
        if($(this).prop("class")=="btn1"){
            if(index>0){
                --index;
            }
            else{
                index=4;
            }
        }
        else{
            if(index<4){
                ++index;
            }
            else{
                index=0;
            }
        }
        $(".btn ul li").removeClass("changeBg");
        $(".btn ul li").eq(index).addClass("changeBg");
        $(".slideshow").css({"left":(-1000)*index});
        var timer2 = setTimeout(function(){
        clearInterval(timer);

            timer = setInterval(slideshow,30);
        }, 1000);
    })
    /***********************end 轮播*******************************/ 

    /***********************图书切换图片*******************************/ 
    $(".book .title li").each(function(index,value){
        $(value).mouseover(function(){
            // 获取所有图片
            var $img =$(".content .center .ul1 li img,.content .center .ul2 li img");
            // 切换背景
            $(this).siblings().removeClass("bgStyle");
            $(this).addClass("bgStyle");
            // 将图片路径更改
            if(index==0){
                $img.prop("src","img/images/demo-ebook.jpg");
            }
            else if(index==1){
                $img.prop("src","img/images/demo-ebooktab2.jpg");
            }
            else{
                $img.prop("src","img/images/demo-ebook-tab3.jpg");
            }
        })
    })
    /***********************end 图书切换图片*******************************/ 

    /***********************推广*******************************/ 
    $(".popularize .title li").each(function(index,value){
        $(value).mouseover(function(){
            $(value).addClass("bgColor");
            $(value).siblings().removeClass("bgColor");
            $(".popularize .content").animate({"left":-1200*index},500);
        })
    })
   $(".popularize .content li").each(function(index,value){
        $(value).mouseover(function(){
            $(".popularize .content li").removeClass("hoverColor");
            $(value).addClass("hoverColor");
        })
    })
    /***********************end 推广*******************************/ 
    /***********************左侧栏点击******************************/ 
    $(".fixedLeft ul li").each(function(index,value){
        $(value).click(function(){
            var top;
            console.log($("body").offset().top);
            console.log($(window).scrollTop());
            $("body").offset().top=0;
            if(index==4){
                top=2950;
            }
            else if(index==5){
                top=3550;
            }
            else if(index==6){
                top=4150;
            }
            else if(index==7){
                top=0;
            }
            else{
                top=(index+1)*550
            }
            $(window).scrollTop(top).show(1000);

        })
    })
    /***********************end 左侧栏点击*******************************/ 
    $(".classify ul li").click(function(){
        location.href = "./product.html"
    })
})