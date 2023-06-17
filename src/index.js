    // Post Reading Progress Indicator
    if($('.post-reading-progress-indicator').length) {
        $(window).on('scroll', function () {
            let docHeight = $("body").height();
            let winHeight = $(window).height();
            let viewport = docHeight - winHeight;
            let scrollPos = $(window).scrollTop();
            let scrollPercent = (scrollPos / viewport) * 100;
            $(".post-reading-progress-indicator span").css("width", scrollPercent + "%");

        });
    }
