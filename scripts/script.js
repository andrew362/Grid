(function ($) {



    var one = $('.one');
    var two = $('.two');
    var three = $('.three');
    var four = $('.four');
    var five = $('.five');
    var six = $('.six');
    var seven = $('.seven');
    var snap = 180;
    var menuBtn = $('#btn');
    var innerDiv = $('.inner');
    var div = $('nav .nav');
    var box = $('.box');



    $(window).on('load', function () {
        setTimeout(function () {
            $('body').addClass('loaded');
        }, 0);
    });



    //Callback Hell! Yeah!!!   
    function openNav() {
        menuBtn.off('click');
        menuBtn.html('-').toggleClass('pulse');
        box.delay(snap * 4).animate({
            opacity: 0
        }, snap * 3);
        seven.animate({
            width: '6.25%'
        }, snap, function () {
            $(this).children().css('opacity', '1');
            six.animate({
                height: "12.5vh"
            }, snap, function () {
                $(this).children().css('opacity', '1');
                five.animate({
                    width: '12.5%'
                }, snap, function () {
                    $(this).children().css('opacity', '1');
                    four.animate({
                        height: '25vh'
                    }, snap, function () {
                        $(this).children().css('opacity', '1');
                        three.animate({
                            width: '25%'
                        }, snap, function () {
                            $(this).children().css('opacity', '1');
                            two.animate({
                                height: '50vh'
                            }, snap, function () {
                                $(this).children().css('opacity', '1');
                                one.animate({
                                    width: '50%'
                                }, snap, function () {
                                    $(this).children().css('opacity', '1');
                                    menuBtn.click(closeNav);
                                });
                            });
                        });
                    });
                });
            });
        });
    }

    function closeNav() {
        menuBtn.off('click');
        menuBtn.html('+');
        innerDiv.css('opacity', '0');
        setTimeout(function () {
            box.delay(snap * 1).animate({
                opacity: 1
            }, snap * 5);
            one.animate({
                width: "0%"
            }, snap, function () {
                two.animate({
                    height: "0vh"
                }, snap, function () {
                    three.animate({
                        width: "0%"
                    }, snap, function () {
                        four.animate({
                            height: "0vh"
                        }, snap, function () {
                            five.animate({
                                width: "0%"
                            }, snap, function () {
                                six.animate({
                                    height: "0vh"
                                }, snap, function () {
                                    seven.animate({
                                        width: '0%'
                                    }, function () {
                                        menuBtn.click(openNav).toggleClass('pulse');
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }, 700);
    }

    $('#btn').click(openNav);





})(jQuery);