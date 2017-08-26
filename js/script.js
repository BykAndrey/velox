$(document).ready(function() {



    var SItem = $(".slider .ItemSliderS");
    var TItem = $(".slider .ItemSliderT");
    var FItem = $(".slider .ItemSliderF");
    var Marks = $(".slider .marks");

    var flag = true;
    var numberActive = 1;

    function GoLeft() {
        if (flag) {
            flag = false;
            TItem.animate({
                opacity: 0
            }, 1000);
            SItem.animate({
                opacity: 0
            }, 1000);
            FItem.animate({
                opacity: 0
            }, 1000);

            setTimeout(function() {
                var buf = $(FItem).html();
                $(FItem).html($(SItem).html());
                $(SItem).html($(TItem).html());

                $(TItem).html(buf);



            }, 1000);

            TItem.animate({
                opacity: 1
            }, 1000);
            SItem.animate({
                opacity: 1
            }, 1000);
            FItem.animate({
                opacity: 1
            }, 1000);
            setTimeout(function() {
                flag = true;
                $(Marks).children().eq(numberActive).removeClass('active');
                if (numberActive == 2) {
                    numberActive = 0;
                } else {
                    numberActive += 1;
                }
                $(Marks).children().eq(numberActive).addClass('active');
            }, 1100);
        } else {

        }

    }

    function GoRight() {
        if (flag) {
            flag = false;

            TItem.animate({
                opacity: 0
            }, 1000);
            SItem.animate({
                opacity: 0
            }, 1000);
            FItem.animate({
                opacity: 0
            }, 1000);
            setTimeout(function() {
                var buf = $(TItem).html();
                $(TItem).html($(SItem).html());
                $(SItem).html($(FItem).html());

                $(FItem).html(buf);



            }, 1000);

            TItem.animate({
                opacity: 1
            }, 1000);
            SItem.animate({
                opacity: 1
            }, 1000);
            FItem.animate({
                opacity: 1
            }, 1000);
            setTimeout(function() {
                flag = true;
                $(Marks).children().eq(numberActive).removeClass('active');
                if (numberActive == 0) {
                    numberActive = 2;
                } else {
                    numberActive -= 1;
                }
                $(Marks).children().eq(numberActive).addClass('active');
            }, 1100);
        } else {

        }
    }




    $(".slider .leftbut").click(function() {
        GoLeft();
    })
    $(".slider .rightbut").click(function() {
        GoRight();
    })

    function Go() {
        setTimeout(function() {
            GoLeft();
            Go();
        }, 7000);
    }

    setTimeout(Go(), 7000);
    $(".toTop").click(function() {


        $('body,html').animate({
            scrollTop: 0
        }, 1500);
    });
    $(".topmenu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    })
    var menu = $(".topmenu ul");
    $(".topmenu .toggle").on('click', function(ev) {

        if (menu.css("display") == "block") {

            $(menu).animate({
                width: "hide"
            }, 1000);
        } else {
            $(menu).animate({
                width: "show"
            }, 1000);
        }
    });
    $(menu).on('click', function(ev) {
        if ($('.page').width() < 801)
            $(menu).animate({
                width: "hide"
            }, 1000);


    });
    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled > 500) {
            $('footer .backgr .toTop').addClass('scroll');

            /*
            	if(scrollTop>$('footer').offset().top){
            		$('footer .backgr .toTop.scroll').removeClass('scroll');
            		console.log(scrolled+"___"+$('footer').offset().top);
            	}*/
        } else {
            $('footer .backgr .toTop.scroll').removeClass('scroll');
        }
        if (scrolled > $('footer').offset().top) {
            console.log(scrolled + "==");
            console.log($('footer').offset().top);
            $('footer .backgr .toTop.scroll').removeClass('scroll');
        }
    }
    var listLi = $('.listcategory').children('li');
    var listIm = $('.listImages').children();
    $('.listcategory  li ').click(function(event) {
        event.preventDefault();
        listLi.each(function(index, el) {
            $(el).removeClass('active');
        });

        $(this).addClass('active');
        var name = $(this).children('a').text();

        switch (name) {
            case "All":
                listIm.each(function(index, el) {
                    $(el).css("display", "block");
                });
                break;
            case "illustrations":
                listIm.each(function(index, el) {
                    if ($(el).attr('id') != "illustrations") {
                        $(el).css("display", "none");
                    } else {
                        $(el).css("display", "block");
                    }
                });
                break;
            case "logo":
                listIm.each(function(index, el) {
                    if ($(el).attr('id') != "Logo") {
                        $(el).css("display", "none");
                    } else {
                        $(el).css("display", "block");
                    }
                });
                break;
            case "Brands":
                listIm.each(function(index, el) {
                    if ($(el).attr('id') != "Brands") {
                        $(el).css("display", "none");
                    } else {
                        $(el).css("display", "block");
                    }
                });
                break;
            case "Web design":
                listIm.each(function(index, el) {
                    if ($(el).attr('id') != "WebDesign") {
                        $(el).css("display", "none");
                    } else {
                        $(el).css("display", "block");
                    }
                });
                break;
            default:
                istIm.each(function(index, el) {
                    $(el).css("display", "block");
                });
                break;
        }
    });
});