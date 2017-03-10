 // 插件的代码
    $.fn.focusImages = function (userSettings) {
        var settings = $.extend({
            width: 200, //宽度
            height: 200, //高度
            speed: 1000, //滚动速度
            time: 5000 //滚动时间间隔
        }, userSettings || {});

        var index = 0;
        var time;
        var len = $(".focusImages").find("li").length;
        var totalWidth = (len + 1) * settings.width;
        var numButton = "";
        for (var i = 1; i <= len; i++) {
            numButton += ('<span>' + ' ' + '</span>')
        }
        numButton = "<div class='controller'>" + numButton + "</div>";

        (function (_this) {
            _this.addClass("focusImages").css({
                "width": settings.width,
                "height": settings.height
            })
                .append(numButton).find("ul").width(totalWidth);
        })(this)

        $("span", this).mouseenter(function () {
            index = $(this).index();
            if (index == len) {
                showFirstPic();
                index = 0;
            } else {
                showPic(index);
            }
        }).eq(0).mouseenter();

        $(".focusImages").hover(function () {
            clearInterval(time);
        }, function () {
            time = setInterval(function () {
                if (index == len) {
                    showFirstPic();
                    index = 0;
                } else {
                    showPic(index);
                }
                index++;
            }, settings.time);
        }).mouseleave();

        function showPic(index) {
            var nowLeft = -index * settings.width;
            $(".focusImages").find("ul").stop(true, false).animate({
                left: nowLeft
            }, settings.speed).end() //stop可以防止用户反复操作时动画反复执行
            .find("span").removeClass("on").eq(index).addClass("on");
        }

        function showFirstPic(index) {
            $(".focusImages ul").append($(".focusImages li:first").clone());
            var nowLeft = -len * settings.width;
            $(".focusImages").find("ul").stop(true, false).animate({
                left: nowLeft
            }, settings.speed, function () {
                $(this).css("left", 0);
                $(this).find("li:last").remove(); //只要新添加的节点一走完，回调函数就把ul的left设置为0，然后把最后一个节点删除
            }).end().find("span").removeClass("on").eq(0).addClass("on");
        }
        return this;
    }