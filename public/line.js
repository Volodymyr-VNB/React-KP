    // Post Reading Progress Indicator
    document.querySelectorAll(".reading-progress-indicator")
    if(('.reading-progress-indicator').length) {
    // if(location.href==="http://localhost:3000/articlePost") {
        window.addEventListener('scroll', function () {
            let docHeight = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
              );
            
            let winHeight = document.documentElement.clientHeight;
            
            let viewport = docHeight - winHeight ;
            let scrollPos = window.scrollY;
            let scrollPercent = (scrollPos / viewport) * 100;
            let progressIndicator = document.querySelector(".progress-indicator");
            progressIndicator? progressIndicator.style.cssText = `width:${scrollPercent}%`:''; 

        });
    }
