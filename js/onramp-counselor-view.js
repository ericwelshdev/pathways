
$(function () {

    if ($(".count-to").length) {

        $(".count-to").countTo({
            refreshInterval: 20
        });

    }

});


$('#counselor-tabnav a').click(function (e) {
    var tab = $(this);
    if (tab.parent('li').hasClass('active')) {
        window.setTimeout(function () {
            $(".tab-pane").removeClass('active');
            tab.parent('li').removeClass('active');
        }, 1);
    }
});


$('#student-tabnav a').click(function (e) {
    var tab = $(this);
    if (tab.parent('li').hasClass('active')) {
        window.setTimeout(function () {
            $(".tab-pane").removeClass('active');
            tab.parent('li').removeClass('active');
        }, 1);
    }
});

// toggle metric 
//$('.count-metric-overview-top').click(function (e) {
//    var obj = $(this);
//    if (obj.hasClass('active')) {
//        window.setTimeout(function () {
//            obj.removeClass('count-metric-overview-top active');
//        }, 1);
//        obj.removeClass('count-metric-overview-top active');
//    }
//});

//*******************************************
/*	EASY PIE CHART
/********************************************/

$(function () {
    if ($('.easy-pie-chart').length > 0) {

        var cOptions = {
            animate: 3000,
            trackColor: "rgba(255,255,255,.1)",
            scaleColor: false,
            lineCap: "round",
            size: 120,
            lineWidth: 6,
            //barColor: "#ef1e25",
            //barColor: function(percent) {
            //    var ctx = this.renderer.getCtx();
            //    var canvas = this.renderer.getCanvas();
            //    var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
            //    gradient.addColorStop(0, "#ffe57e");
            //    gradient.addColorStop(1, "#de5900");
            //    return gradient;
            //},

            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        }


        cOptions.barColor= function(percent) {
            var ctx = this.renderer.getCtx();
            var canvas = this.renderer.getCanvas();
            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

            gradient.addColorStop(0, "#ff7930");
            gradient.addColorStop(1, "#ff1638");

            //gradient.addColorStop(0, "#5e46e3");
            //gradient.addColorStop(1, "#e10e0e");
            return gradient;
        }

        $('.easy-pie-chart.gradient').easyPieChart(cOptions);

    }


});



//*******************************************
/*	EASY PIE CHART
/********************************************/

$(function () {
    if ($('.easy-pie-chart-med').length > 0) {

        var cOptions = {
            animate: 3000,
            trackColor: "#ccc",
            scaleColor: false,
            lineCap: "round",
            size: 120,
            lineWidth: 5,
            barColor: "#ef1e25",
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        }

        cOptions.barColor = "#3E9C1A"; // green
        $('.easy-pie-chart-med.green').easyPieChart(cOptions);
        cOptions.barColor = "#FFB800"; // yellow
        $('.easy-pie-chart-med.yellow').easyPieChart(cOptions);
        cOptions.barColor = "#E60404"; // red
        $('.easy-pie-chart-med.red').easyPieChart(cOptions);
    }


    // Minimalize menu
    $('.collapse-link').on('click', function () {
        var bar = $("#navbarHS");
        var content = $("#navbarHSContent");
        if (content.hasClass("in"))
        {
            $("#navbarHSContent li").each(function (index) {
                $(this).animate({ right: "100px" }, index * 200 + 100)
            });

            content.toggleClass("in")

        }
        else
        {
            content.toggleClass("in")

            $("#navbarHSContent li").each(function (index) {
                $(this).animate({ right: "-100px" }, index * 200 + 100)
            });
        }

       
	
});
  

	

      



    //// Collapse nav function
    //$('.collapse-link').on('click', function () {
    //    var ibox = $(this).closest('div.navlist');
    //    var button = $(this).find('i');
    //    var content = ibox.find('navbarHS');
    //    content.slideToggle(200);
    //    button.toggleClass('fa-chevron-right').toggleClass('fa-chevron-down');
    //    ibox.toggleClass('').toggleClass('border-bottom');
    //    setTimeout(function () {
    //        ibox.resize();
    //        ibox.find('[id^=map-]').resize();
    //    }, 50);
    //});


});
