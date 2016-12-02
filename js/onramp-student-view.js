$('#student-tabnav a').click(function (e) {
    var tab = $(this);
    if (tab.parent('li').hasClass('active')) {
        window.setTimeout(function () {
            $(".tab-pane").removeClass('active');
            tab.parent('li').removeClass('active');
        }, 1);
    }
});



$(function () {

    if ($(".count-to").length) {

        $(".count-to").countTo({
            refreshInterval: 20
        });

    }

});

//*******************************************
/*	EASY PIE CHART
/********************************************/

$(function () {
    if ($('.easy-pie-chart').length > 0) {

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
        $('.easy-pie-chart.green').easyPieChart(cOptions);
        cOptions.barColor = "#FFB800"; // yellow
        $('.easy-pie-chart.yellow').easyPieChart(cOptions);
        cOptions.barColor = "#E60404"; // red
        $('.easy-pie-chart.red').easyPieChart(cOptions);
    }


});