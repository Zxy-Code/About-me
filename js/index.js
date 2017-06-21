$(function(){
    /*header的处理 背景、跳转*/
    var header_a = $(".top-menu ul li a");
    $(header_a).hover(function(){
        var index = $(header_a).index(this);
        $(header_a).eq(index).css("background","#FFD670");
    }, function () {
        var index = $(header_a).index(this);
        $(header_a).eq(index).css("background","none");
    })
    /*跳转*/
    var con_section = $(".content-section");
    var con_section_tops = con_section.eq(0).offset().top;
    var por_section = $(".portfolio-section");
    var por_section_tops = por_section.eq(0).offset().top;
    var portfolio_section_tops = $("#portfolio").offset().top;
    var contact_section = $(".contact-section");
    var contact_section_tops = contact_section.eq(0).offset().top;
    //console.log(contact_section_tops);
    //console.log($(window).scrollTop())
    header_a.click(function () {
        var index = header_a.index(this);
        var obj = document.documentElement.scrollTop==0?document.body:document.documentElement;
        if(index == 0){
            $(obj).animate({scrollTop:con_section_tops},1500);
        }
        if(index == 1){
            $(obj).animate({scrollTop:por_section_tops},1500);
        }
        if(index == 2){
            $(obj).animate({scrollTop:portfolio_section_tops},1500);
        }
        if(index == 3){
            $(obj).animate({scrollTop:contact_section_tops},1500);
        }
    })

    /*let's begin*/
    $(".welcome a").click(function () {
        var obj = document.documentElement.scrollTop == 0 ? document.body:document.documentElement;
        $(obj).animate({scrollTop:$("#about").position().top},1200);
    });
    $(".about-section-grid-1 a").click(function(){
        var obj = document.documentElement.scrollTop == 0 ? document.body:document.documentElement;
        $(obj).animate({scrollTop:$("#work").position().top},1200);
    })
    $(".address a").click(function(){
        var obj = document.documentElement.scrollTop == 0 ? document.body:document.documentElement;
        $(obj).animate({scrollTop:$("#portfolio").position().top},1200);
    })


    /*轮播*/
    var lunbo_con = $(".lunbo_win li");
    //console.log(lunbo_con.length)
    var num=0;
    var t = setInterval(move,5000);
    function move(){
        num++;
        if(num == lunbo_con.length){
            num=0;
        }
        lunbo_con.each(function (index,obj) {
            //obj.style.opacity = 0;
            //obj.style.zIndex = 0;
            //$(obj).animate({opacity:0},1000, function () {
            //    $(obj).css("display","none");
            //    lunbo_con.eq(num).css("display","block");
            //    lunbo_con.eq(num).animate({opacity:1},1000)
            //})
            obj.style.display = "none";
            obj.style.opacity = 0;
        })
        lunbo_con.eq(num).css("display","block");
        lunbo_con.eq(num).animate({opacity:1},2000)
    }
//    箭头的处理
    var leftB = $(".leftB");
    var rightB = $(".rightB")
    leftB.click(function () {
        //clearInterval(t);
        num--;
        if(num==-1){
            num=lunbo_con.length-1;
        }
        lunbo_con.each(function (index,obj) {
            obj.style.display = "none";
            obj.style.opacity = 0;
        })
        lunbo_con.eq(num).css("display","block");
        lunbo_con.eq(num).animate({opacity:1},2000)
    });
    rightB.click(function () {
        //clearInterval(t);
        num++;
        if(num==lunbo_con.length){
            num=0;
        }
        lunbo_con.each(function (index,obj) {
            obj.style.display = "none";
            obj.style.opacity = 0;
        })
        lunbo_con.eq(num).css("display","block");
        lunbo_con.eq(num).animate({opacity:1},2000)
    });
    /*鼠标与块接触或离开的停止和开始轮播*/
    var lunbo_win = $(".lunbo_win");
    lunbo_win.hover(function () {
        clearInterval(t);
    }, function () {
        t = setInterval(move,5000);
    })



    /*对固定键UP的处理*/
    var obj = document.documentElement.scrollTop==0?document.body:document.documentElement;
    console.log($(window).height())
    var win_heights = $(window).height();
    $(window).scroll(function(){
        if(obj.scrollTop>=con_section_tops-win_heights){
            $(".fixed").css("display","block")
        }else{
            $(".fixed").css("display","none")
        }
    })
    var weixin = $(".weixin");
    $(weixin).hover(function () {
        $(".weixin_img").css("display","block");
        $(weixin).css("background","#FFB600");
    }, function () {
        $(".weixin_img").css("display","none");
        $(weixin).css("background","#FFD670");
    })

    /*点击返回顶层*/
    $(".up").click(function () {
        var obj = document.documentElement.scrollTop==0?document.body:document.documentElement;
        $(obj).animate({scrollTop:0},1500);
        //console.log($(window));
    })
    /*about me */
    /*portfolio（作品集）的处理*/
    $(window).scroll(function(){
        var obj = document.documentElement.scrollTop==0?document.body:document.documentElement;
        var scrollTops = obj.scrollTop;
        /*about me */
        if( scrollTops >= $($(".about-section-head")[0]).offset().top-$(window).height()) {
            $(".about-section-head img").css({
                opacity:1,
                transform:"translate(60px,0)"
            })
            $(".about-section-head h3").css({
                opacity:1,
                transform:"translate(-60px,0)"
            })
            $(".about-section-head p").css({
                transform:"scale(1,1)"
            })
        }
        if( scrollTops >= $($(".about-section-grids")[0]).offset().top-$(window).height()) {
            $(".about-section-grid-1").css({
                opacity:1,
                transform:"translate(80px,0)"
            })
            $(".about-section-grid-3").css({
                opacity:1,
                transform:"translate(-80px,0)"
            })
            $(".about-section-grid-2").css({
                opacity:1,
                transform:"translate(0,500px)"
                //transform:"rotateY(360deg)"
            })

            var skill_width_ps = $(".progress-grid").width()*0.9;
            $(".sekuai").eq(0).animate({width:skill_width_ps},2500,function(){
                $(".percent").eq(0).html("90%")
            })
            var skill_width_ai = $(".progress-grid").width()*0.8;
            $(".sekuai").eq(1).animate({width:skill_width_ai},1200,function(){
                $(".percent").eq(1).html("80%")
            })
            var skill_width_js = $(".progress-grid").width()*0.95;
            $(".sekuai").eq(2).animate({width:skill_width_js},2500,function(){
                $(".percent").eq(2).html("95%")
            })
            var skill_width_html = $(".progress-grid").width()*0.95;
            $(".sekuai").eq(3).animate({width:skill_width_html},2000,function(){
                $(".percent").eq(3).html("95%")
            })
            var skill_width_css = $(".progress-grid").width()*0.95;
            $(".sekuai").eq(4).animate({width:skill_width_css},2200,function(){
                $(".percent").eq(4).html("95%")
            })
            var skill_width_ajax = $(".progress-grid").width()*0.95;
            $(".sekuai").eq(5).animate({width:skill_width_ajax},2200,function(){
                $(".percent").eq(5).html("95%")
            })
            var skill_width_less = $(".progress-grid").width()*0.90;
            $(".sekuai").eq(6).animate({width:skill_width_less},2200,function(){
                $(".percent").eq(6).html("90%")
            })
            var skill_width_cordova = $(".progress-grid").width()*0.85;
            $(".sekuai").eq(7).animate({width:skill_width_cordova},2200,function(){
                $(".percent").eq(7).html("85%")
            })

        }
            /*portfolio（作品集）的处理*/

        if( scrollTops >= $($(".portfolio-section-top-row")[0]).offset().top-$(window).height()){
            $(".portfolio-section-head").css({
                opacity:1,
                transform:"translate(0,-50px)"
            })
            $(".portfolio-section-top-row-left-grid").css({
                opacity:1,
                transform:"translate(50px,0)"
            })
            $(".portfolio-section-top-row-right-grid").css({
                opacity:1,
                transform:"translate(-50px,0)"
            })
        }
        if(scrollTops>=$($("#portfolio")).offset().top-$(window).height()){
            $("#filters").css({
                transform:"rotateY(360deg)"
            });
            $("#portfoliolist").css({
                transform:"scale(1,1)"
            })
        }
    })


    var portfoliolist = $(".portfoliolist");
    var widths = $(window).width();
    var heights = $(window).height();
    //console.log(widths,heights)
    var mask;
    var closeBtn;
    var mask_img_box;
    $(".portfoliolist").dblclick(function(e){
        //var index = $(".portfoliolist").index(this);
        mask = $("<div>");
        $(mask).css({
            width:widths,
            height:heights,
            background:"#000",
            opacity:0.8,
            position:"fixed",
            top:0,
            left:0,
            zIndex:10
        }).appendTo("body");
        mask_img_box = $("<div class='mask_box_img'>");
        $(mask_img_box).css({
            width:400,
            height:400,
            //border:"1px solid red",
            position:"fixed",
            left:(widths-400)/2,
            top:(heights-400)/2,
            //transform:"scale(1,1)",
            zIndex:12
        });

        var new_img = $(this).children("img").clone();
        $(new_img).attr("width","100%");
        $(new_img).css("marginTop",0);
        new_img.appendTo(mask_img_box);

        /*滚轮放大缩小*/
        var speed=10;
        //var bili = $(mask_img_box).width()/$(mask_img_box).height();
        var bili = 400/400;
        $(mask_img_box).mouseWheel(function(){
            var img_box_widths = $(mask_img_box).width()+speed;
            //var img_box_heights = img_box_widths/bili;
            var img_box_heights = $(mask_img_box).height()+speed/bili;

            var img_box_lefts = $(mask_img_box).position().left-speed/2;
            var img_box_tops = $(mask_img_box).position().top-speed/bili/2;
            if($(mask_img_box)[0].offsetTop<=0){
                return;
            }
            $(this).css({
                width:img_box_widths,
                height:img_box_heights,
                left:(widths-img_box_widths)/2,
                top:(heights-img_box_heights)/2
                //overflow:"hidden"
            })
        },function(){
            var img_box_widths = $(mask_img_box).width()-speed;
            var img_box_heights = $(mask_img_box).height()-speed/bili;
            var img_box_lefts = $(mask_img_box).position().left+speed/2;
            var img_box_tops = $(mask_img_box).position().top+speed/bili/2;
            if(img_box_widths<=200){
                img_box_widths=200;
                img_box_heights=200;
            }
            $(this).css({
                width:img_box_widths,
                height:img_box_heights,
                left:(widths-img_box_widths)/2,
                top:(heights-img_box_heights)/2
            })
        });


        closeBtn = $("<div class='.closeBtn'>X</div>");
        $(closeBtn).css({
            //float:"right",
            position:"absolute",
            top:0,
            right:-30,
            width:30,
            height:30,
            background:"#ddd",
            textAlign:"center",
            lineHeight:"30px",
            //borderRadius:"50%",
            background:"#BFBFBF",
            zIndex:15,
            color:"#fff",
            cursor:"pointer"
        });
        $(closeBtn).appendTo(mask_img_box);
        $(mask_img_box).appendTo("body");

        $(closeBtn).click(function(){
            $(mask).remove();
            $(mask_img_box).remove();
            $(closeBtn).remove();
            mask = null;
            mask_img_box = null;
            closeBtn = null;
        })
    });

    $(".filter").click(function(){
        var index = $(".filter").index(this);
        $(".filter").each(function(index,obj){
            $(obj).css({
                border:"1px solid #FFD670"
            })
        });
        $(this).css({
            border:"1px solid #fff"
        })
        $(".zuopin").css({
            //transform:"scale(0.0001,0.0001)",
            display:"none"
        });
        $(".zuopin").eq(index).css({
            display:"block"
            //transform:"scale(1,1)"
        })
    });
    //var h2_heights = $(".portfoliolist h2").height();
    //console.log(h2_heights)
    /*作品集鼠标移动上去时的上移效果*/
    $(".portfoliolist").hover(function(){
        $(this).css({height:$(this).children('img').height()});
        $(this).children("img").animate({
            marginTop:"-2.1rem"
        });
        $(this).children("h2").animate({
            bottom:"0.5rem"
        })
    },function(){
        $(this).css({height:"auto"});

        $(this).children("img").animate({
            marginTop:0
        });
        $(this).children("h2").animate({
            bottom:"-1.6rem"
        })
    })

    /*footer*/
    //$(".contact-info a").hover(function () {
    //    $(this).css({
    //        fontSize:"1.2em"
    //    })
    //},function(){
    //    $(this).css({
    //        fontSize:"1em"
    //    })
    //})
})