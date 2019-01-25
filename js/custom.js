$(document).ready(function () {
   var width = $(window).width();
    console.log(width);
    try {
        if (parseInt(width) < 960) {
            var y = -width + 960;
            y = y / 2;
            y = 550 - y;
            document.getElementById("flexslider").style.height = y + "px";
        } else {
            // document.getElementById("flexslider").style.height = "550px";
        }
    } catch (error) {

    }
    $(window).resize(function () {
        var width = $(window).width();
        console.log(width);
        try {
            if (parseInt(width) < 960) {
                var y = -width + 960;
                y = y / 2;
                y = 550 - y;
                document.getElementById("flexslider").style.height = y + "px";
            } else {
                // document.getElementById("flexslider").style.height = "550px";
            }
        } catch (error) {
    
        }
    });
});
