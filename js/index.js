var oppent1 = true;
var oppent2 = true;
var oppent3 = true;
var oppent4 = true;
$("._jt_1").click(function() {
    if (oppent1) {
        $(this).next().slideDown();
        $("._jc_2,._jc_3,._jc_4").slideUp();
        oppent1 = false
    } else {
        $(this).next().slideUp();
        oppent1 = true
    }
})
$("._jt_2").click(function() {
    if (oppent2) {
        $(this).next().slideDown();
        $("._jc_1,._jc_3,._jc_4").slideUp();
        oppent2 = false
    } else {
        $(this).next().slideUp();
        oppent2 = true
    }
})
$("._jt_3").click(function() {
    if (oppent3) {
        $(this).next().slideDown();
        $("._jc_2,._jc_1,._jc_4").slideUp();
        oppent3 = false
    } else {
        $(this).next().slideUp();
        oppent3 = true
    }
})
$("._jt_4").click(function() {
    if (oppent4) {
        $(this).next().slideDown();
        $("._jc_2,._jc_1,._jc_3").slideUp();
        oppent4 = false
    } else {
        $(this).next().slideUp();
        oppent4 = true
    }
})


$(window).ready = function() {
    $(".nav ul li a").css({
        'lineHeight': '95px',
        "transition": ".5"
    })
}
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        /*       $('.logo_img').addClass('min');
              $('.logo').addClass('left'); */
        $("#leftsead").css("display", "block")
        $('.logo img').css({
            'width': '143px',
            'height': '42px',
            'transition': '1.5s',
            "transitionTimingFunction": "ease"
        });

    } else {
        $('.logo img').css({
            'width': '204px',
            'height': '60px',
            'transition': '1.5s'
        });

        /*  $('.logo_img').removeClass('min');
         $('.logo').removeClass('left');
         $("#leftsead").css("display","none") */
    }

    if ($(this).scrollTop() > 0) {
        $('.header').addClass('header_fix');
        $('.header').stop(true).animate({
            height: '60px'
        }, 1000);
        $('.wx_box').css({
            'lineHeight': '51px',
            "transition": ".5"
        });
        // $('.logo').css({'marginLeft': '25px',"transition":".5"});
        // $(".nav ul a").removeClass("heightArever")
        // $(".nav ul a").addClass("heightA")
        $('.nav').css({
            'line-height': '60px',
            'height': '60px',
            'transition': '0.5s'
        });
        $('.nav ul li a').css({
            'line-height': '60px',
            'height': '60px',
            'transition': '1s'
        });

        $(".home").css({
            "top": "60px",
            "transition": ".5"
        })
    } else {
        $('.header').removeClass('header_fix');
        $('.header').stop(true).animate({
            height: '96px'
        }, 1000);
        $('.wx_box').css({
            'lineHeight': '91px',
            "transition": ".5"
        });
        // $('.logo').css({'marginLeft': '25px',"transition":".5"});
        // $(".nav ul a").removeClass("heightA")
        // $(".nav ul a").addClass("heightArever")
        $('.nav').css({
            'line-height': '96px',
            'height': '96px',
            'transition': '0.5s'
        });
        $('.nav ul li a').css({
            'line-height': '96px',
            'height': '96px',
            'transition': '1s'
        });

        $(".home").css({
            "top": "96px",
            "transition": ".5"
        })

    }
});
/*daohan*/
$(function() {
    $('.nav ul li').mouseover(function() {
        $(this).find('.bgk').stop(true).animate({
            top: '98%'
        }, 300)
        $(this).find('span').css('color', '#000');
    })
    $('.nav ul li').mouseout(function() {
        $(this).find('span').css('color', '#666');
        $(this).find('.bgk').stop(true).animate({
            top: '100%'
        }, 300)
    })
    $('.wx_icon').mouseover(function() {
        $('.ewm_show').stop(true).slideDown();
    })
    $('.wx_icon').mouseout(function() {
        $('.ewm_show').stop(true).slideUp();
    })
    $('.news_list_01').mouseover(function() {
        $(this).find('img').stop(true).animate({
            opacity: '0.6'
        }, 500);
        $(this).find('span').stop(true).animate({
            left: '35%'
        }, 500);

    })
    $('.news_list_01').mouseout(function() {
        $(this).find('img').stop(true).animate({
            opacity: '1'
        }, 500);
        $(this).find('span').stop(true).animate({
            left: '-136px'
        }, 500);
    })
})


// 回到顶部的
$(document).ready(function() {

    $("#leftsead a").hover(function() {
        if ($(this).prop("className") == "youhui") {
            $(this).children("img.hides").show();
        } else {
            $(this).children("img.hides").show();
            $(this).children("img.shows").hide();
            $(this).children("img.hides").animate({
                marginRight: '0px'
            }, 500);
        }
    }, function() {
        if ($(this).prop("className") == "youhui") {
            $(this).children("img.hides").hide();
        } else {
            $(this).children("img.hides").animate({
                marginRight: '-143px'
            }, 500, function() {
                $(this).hide();
                $(this).next("img.shows").show();
            });
        }
    });

    $("#top_btn").click(function() {
        if (scroll == "off") return;
        $("html,body").animate({
            scrollTop: 0
        }, 600);
    });

});
// 语言字体颜色

$(".english").mousemove(function() {
    $(".chinese").css({
        color: "#000"
    })
    $(this).css({
        color: "#fca136",
    })
})
$(".english").mouseleave(function() {
    $(".chinese").css({
        color: "#fca136"
    })
    $(this).css({
        color: "#000"
    })
})

$(function() {
    $('.list_index li').mouseover(function() {
        $(this).addClass('on').siblings().removeClass('on');
        var name = $(this).attr('data-name');
        $(name).stop(true).fadeIn(500).siblings().stop(true).fadeOut(500);
        var title = $(name).find('img').attr('alt');
        $('.span_title a').html(title);
    })
});

$(function() {
    $('.nav ul li').mouseover(function() {
        $(this).find('.bgk').stop(true).animate({
            top: '98%'
        }, 300)
        $(this).find('span').css('color', '#000');
    })
    $('.nav ul li').mouseout(function() {
        $(this).find('span').css('color', '#666');
        $(this).find('.bgk').stop(true).animate({
            top: '100%'
        }, 300)
    })
    $('.wx_icon').mouseover(function() {
        $('.ewm_show').stop(true).slideDown();
    })
    $('.wx_icon').mouseout(function() {
        $('.ewm_show').stop(true).slideUp();
    })
    $('.news_list_01').mouseover(function() {
        $(this).find('img').stop(true).animate({
            opacity: '0.6'
        }, 500);
        $(this).find('span').stop(true).animate({
            left: '35%'
        }, 500);

    })
    $('.news_list_01').mouseout(function() {
        $(this).find('img').stop(true).animate({
            opacity: '1'
        }, 500);
        $(this).find('span').stop(true).animate({
            left: '-136px'
        }, 500);
    })
})